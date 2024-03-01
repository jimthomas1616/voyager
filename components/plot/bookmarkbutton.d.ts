import * as React from 'react';
import { BookmarkAction } from '../../actions/bookmark';
import { ActionHandler } from '../../actions/redux-action';
import { Bookmark } from '../../models/bookmark';
import { ResultPlot } from '../../models/result';
export interface BookmarkProps extends ActionHandler<BookmarkAction> {
    bookmark: Bookmark;
    plot: ResultPlot;
}
export interface BookmarkButtonState {
    openDialog: boolean;
}
export declare class BookmarkButtonBase extends React.PureComponent<BookmarkProps, BookmarkButtonState> {
    private bookmarkDialog;
    private bookmarkPopup;
    constructor(props: BookmarkProps);
    componentWillUpdate(nextProps: BookmarkProps, nextState: BookmarkButtonState): void;
    render(): JSX.Element;
    private onKeepBookmark;
    private isBookmarked;
    private onBookmarkClick;
    private onBookmarkRemove;
    private onBookmarkAdd;
    private bookmarkHandler;
    private alertHandler;
    private handleClickOutside;
}
export declare const BookmarkButton: typeof BookmarkButtonBase;
