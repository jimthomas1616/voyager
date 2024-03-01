import { EncodingWithFacet } from 'vega-lite/build/src/encoding';
import { GenericUnitSpec } from 'vega-lite/build/src/spec';
import { GenericState, UndoableStateBase } from '../models/index';
import { Selector } from 'reselect/src/reselect';
import { State } from '../models/index';
import { Result, ResultType } from '../models/result';
export declare const selectResult: {
    [k in ResultType]?: Selector<State, Result>;
};
export declare const selectResultLimit: {
    [k in ResultType]?: Selector<State, number>;
};
export declare const selectMainSpec: Selector<GenericState<UndoableStateBase>, GenericUnitSpec<EncodingWithFacet<string | import("../../node_modules/vega-lite/build/src/fielddef").RepeatRef>, import("../../node_modules/vega-lite/build/src/mark").AnyMark>>;
