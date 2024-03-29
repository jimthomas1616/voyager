/**
 * Helpers for implementing actions with Typescript.
 */
import { Action as BaseReduxAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
/**
 * Basic Redux Action of type A.
 * (A should be a type of a string literal.)
 */
export interface PlainReduxAction<A> extends BaseReduxAction {
    type: A;
}
/**
 *
 */
export interface ReduxAction<A, P> extends PlainReduxAction<A> {
    payload: P;
}
/**
 * Handler mixins interface for dealing with actions from presentation components.
 */
export interface ActionHandler<A> {
    handleAction: (action: A) => void;
}
/**
 * Create a handleAction object
 */
export declare function createDispatchHandler<A extends (BaseReduxAction | ThunkAction<any, any, any>)>(): (dispatch: Dispatch<A>) => ActionHandler<A>;
