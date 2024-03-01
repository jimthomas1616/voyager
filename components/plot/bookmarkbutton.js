"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CSSModules = require("react-css-modules");
var TetherComponent = require("react-tether");
var bookmark_1 = require("../../actions/bookmark");
var styles = require("./bookmarkbutton.scss");
var BookmarkButtonBase = /** @class */ (function (_super) {
    __extends(BookmarkButtonBase, _super);
    function BookmarkButtonBase(props) {
        var _this = _super.call(this, props) || this;
        _this.bookmarkHandler = function (ref) {
            _this.bookmarkPopup = ref;
        };
        _this.alertHandler = function (ref) {
            _this.bookmarkDialog = ref;
        };
        _this.state = {
            openDialog: false
        };
        _this.onBookmarkRemove = _this.onBookmarkRemove.bind(_this);
        _this.onBookmarkAdd = _this.onBookmarkAdd.bind(_this);
        _this.onBookmarkClick = _this.onBookmarkClick.bind(_this);
        _this.onKeepBookmark = _this.onKeepBookmark.bind(_this);
        return _this;
    }
    BookmarkButtonBase.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (!nextState) {
            return;
        }
        if (nextState.openDialog) {
            document.addEventListener('click', this.handleClickOutside.bind(this), true);
        }
        else if (this.state.openDialog) {
            document.removeEventListener('click', this.handleClickOutside.bind(this), true);
        }
    };
    BookmarkButtonBase.prototype.render = function () {
        var styleName = (this.isBookmarked()) ? 'bookmark-command-selected' : 'command';
        return (React.createElement(TetherComponent, { attachment: "top right", targetAttachment: "bottom left" },
            React.createElement("i", { title: 'Bookmark', className: "fa fa-bookmark", styleName: styleName, onClick: this.onBookmarkClick }),
            this.state.openDialog &&
                React.createElement("div", { styleName: 'bookmark-alert', ref: this.alertHandler },
                    React.createElement("div", { ref: this.bookmarkHandler }, "Remove Bookmark?"),
                    React.createElement("small", null, "Your notes will be lost."),
                    React.createElement("div", null,
                        React.createElement("a", { onClick: this.onBookmarkRemove },
                            React.createElement("span", { styleName: 'fa-span' },
                                React.createElement("i", { className: "fa fa-trash-o" }),
                                "\u00A0Remove it\u00A0\u00A0")),
                        React.createElement("a", { onClick: this.onKeepBookmark },
                            React.createElement("span", { styleName: 'fa-span' },
                                React.createElement("i", { className: "fa fa-bookmark" }),
                                "\u00A0Keep it\u00A0\u00A0"))))));
    };
    BookmarkButtonBase.prototype.onKeepBookmark = function () {
        this.setState({ openDialog: false });
    };
    BookmarkButtonBase.prototype.isBookmarked = function () {
        var _a = this.props, bookmark = _a.bookmark, plot = _a.plot;
        return !!bookmark.dict[JSON.stringify(plot.spec)];
    };
    BookmarkButtonBase.prototype.onBookmarkClick = function () {
        if (this.isBookmarked()) {
            this.setState({ openDialog: !this.state.openDialog });
        }
        else {
            this.onBookmarkAdd();
        }
    };
    BookmarkButtonBase.prototype.onBookmarkRemove = function () {
        this.setState({ openDialog: false });
        this.props.handleAction({
            type: bookmark_1.BOOKMARK_REMOVE_PLOT,
            payload: {
                spec: this.props.plot.spec
            }
        });
    };
    BookmarkButtonBase.prototype.onBookmarkAdd = function () {
        this.props.handleAction({
            type: bookmark_1.BOOKMARK_ADD_PLOT,
            payload: {
                plot: this.props.plot
            }
        });
    };
    BookmarkButtonBase.prototype.handleClickOutside = function (e) {
        if (this.bookmarkPopup && this.bookmarkDialog && (this.bookmarkDialog.contains(e.target) ||
            this.bookmarkPopup.contains(e.target))) {
            return;
        }
        this.setState({
            openDialog: false
        });
    };
    return BookmarkButtonBase;
}(React.PureComponent));
exports.BookmarkButtonBase = BookmarkButtonBase;
exports.BookmarkButton = CSSModules(BookmarkButtonBase, styles);
//# sourceMappingURL=bookmarkbutton.js.map