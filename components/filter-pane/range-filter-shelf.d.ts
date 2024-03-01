import * as React from 'react';
import { DateTime } from 'vega-lite/build/src/datetime';
import { FieldRangePredicate } from 'vega-lite/build/src/predicate';
import { FilterAction } from '../../actions';
import { ActionHandler } from '../../actions/redux-action';
export interface RangeFilterShelfProps extends ActionHandler<FilterAction> {
    domain: number[] | DateTime[];
    index: number;
    filter: FieldRangePredicate;
    renderDateTimePicker: boolean;
}
export interface RangeFilterShelfState {
    minDateTimePickerOpen: boolean;
    maxDateTimePickerOpen: boolean;
}
export declare class RangeFilterShelfBase extends React.PureComponent<RangeFilterShelfProps, RangeFilterShelfState> {
    constructor(props: RangeFilterShelfProps);
    render(): JSX.Element;
    protected filterModifyExtent(input: number[]): void;
    protected filterModifyMaxBound(e: any): void;
    protected filterModifyMinBound(e: any): void;
    private renderNumberInput;
    private renderDateTimePicker;
    private focusInput;
    private toggleMinDateTimePicker;
    private toggleMaxDateTimePicker;
    /**
     * returns whether to show the time component in the date time picker
     */
    private showTime;
    /**
     * Returns a function to format how the number is displayed in range filter for
     * the given time unit.
     */
    private getFormat;
    /**
     * Returns the range filter step for the given time unit.
     */
    private getStep;
}
export declare const RangeFilterShelf: typeof RangeFilterShelfBase;
