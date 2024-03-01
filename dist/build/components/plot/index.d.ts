import * as React from 'react';
import { InlineData } from 'vega-lite/build/src/data';
import { SortField, SortOrder } from 'vega-lite/build/src/sort';
import { TopLevelFacetedUnitSpec } from 'vega-lite/build/src/spec';
import { BookmarkAction } from '../../actions/bookmark';
import { LogAction } from '../../actions/log';
import { ActionHandler } from '../../actions/redux-action';
import { ResultAction } from '../../actions/result';
import { ShelfAction } from '../../actions/shelf';
import { ShelfPreviewAction } from '../../actions/shelf-preview';
import { Bookmark } from '../../models/bookmark';
import { PlotFieldInfo } from '../../models/result';
import { ShelfFilter } from '../../models/shelf/filter';
export interface PlotProps extends ActionHandler<ShelfAction | BookmarkAction | ShelfPreviewAction | ResultAction | LogAction> {
    data: InlineData;
    filters: ShelfFilter[];
    fieldInfos?: PlotFieldInfo[];
    isPlotListItem?: boolean;
    showBookmarkButton?: boolean;
    showSpecifyButton?: boolean;
    onSort?: (channel: 'x' | 'y', sort: SortField<string> | SortOrder) => void;
    spec: TopLevelFacetedUnitSpec;
    bookmark?: Bookmark;
    closeModal?: () => void;
}
export interface PlotState {
    hovered: boolean;
    preview: boolean;
    copiedPopupIsOpened: boolean;
}
export declare class PlotBase extends React.PureComponent<PlotProps, PlotState> {
    private hoverTimeoutId;
    private previewTimeoutId;
    private vegaLiteWrapper;
    private plotLogger;
    constructor(props: PlotProps);
    componentDidUpdate(prevProps: PlotProps, prevState: PlotState): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
    private renderFields;
    private clearHoverTimeout;
    private clearPreviewTimeout;
    private onMouseEnter;
    private onMouseLeave;
    private onSort;
    private onSpecify;
    private onPreviewMouseEnter;
    private onPreviewMouseLeave;
    private renderSortButton;
    private renderSpecifyButton;
    private renderBookmarkButton;
    private handleTextChange;
    private readonly specWithFilter;
    private renderCopySpecButton;
    private copied;
    private isVerticallyOverFlown;
    private vegaLiteWrapperRefHandler;
}
export declare const Plot: typeof PlotBase;
