import { Schema } from 'compassql/build/src/schema';
import * as React from 'react';
import { ConnectDropTarget } from 'react-dnd';
import { ActionHandler } from '../../actions/index';
import { SpecEncodingAction } from '../../actions/shelf';
import { ShelfFieldDef, ShelfId } from '../../models';
import { ShelfValueDef } from '../../models/shelf/spec';
/**
 * Props for react-dnd of EncodingShelf
 */
export interface EncodingShelfDropTargetProps {
    connectDropTarget: ConnectDropTarget;
    isOver: boolean;
    item: Object;
}
export interface EncodingShelfPropsBase extends ActionHandler<SpecEncodingAction> {
    id: ShelfId;
    fieldDef: ShelfFieldDef;
    valueDef: ShelfValueDef;
    schema: Schema;
}
export interface EncodingShelfState {
    customizerIsOpened: boolean;
}
export declare const EncodingShelf: () => React.PureComponent<EncodingShelfPropsBase, {}>;
