import * as React from 'react';
import { DateTime } from 'vega-lite/build/src/datetime';
import { FieldOneOfPredicate } from 'vega-lite/build/src/predicate';
import { FilterAction } from '../../actions';
export interface OneOfFilterShelfProps {
    domain: string[] | number[] | boolean[] | DateTime[];
    filter: FieldOneOfPredicate;
    index: number;
    handleAction: (action: FilterAction) => void;
}
export interface OneOfFilterShelfState {
    hideSearchBar: boolean;
}
export declare class OneOfFilterShelfBase extends React.PureComponent<OneOfFilterShelfProps, OneOfFilterShelfState> {
    constructor(props: OneOfFilterShelfProps);
    render(): JSX.Element;
    protected filterModifyOneOf(index: number, oneOf: string[] | number[] | boolean[] | DateTime[]): void;
    private toggleCheckbox;
    private onSelectOne;
    private onSelectAll;
    private onClearAll;
    private onClickSearch;
    private onSearch;
    /**
     * returns all div nodes in current filter shelf
     */
    private getDivs;
}
export declare const OneOfFilterShelf: typeof OneOfFilterShelfBase;
