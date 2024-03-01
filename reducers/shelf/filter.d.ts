import { FieldOneOfPredicate, FieldRangePredicate } from 'vega-lite/build/src/predicate';
import { Action } from '../../actions/index';
export declare function filterReducer(filters: Array<FieldRangePredicate | FieldOneOfPredicate>, action: Action): Array<FieldRangePredicate | FieldOneOfPredicate>;
