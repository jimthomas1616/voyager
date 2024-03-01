import * as React from 'react';
import { ActionHandler, DatasetAsyncAction } from '../../actions';
import { Dataset } from '../../models';
export interface DataSelectorOwnProps {
    title: 'Change' | 'Load';
}
export interface DataSelectorConnectProps {
    data: Dataset;
}
export declare type DataSelectorProps = DataSelectorConnectProps & DataSelectorOwnProps & ActionHandler<DatasetAsyncAction>;
export interface DataSelectorState {
    modalIsOpen: boolean;
    dataText: string;
    dataName: string;
    dataUrl: string;
    fileType: string;
}
export declare class DataSelectorBase extends React.PureComponent<DataSelectorProps, DataSelectorState> {
    constructor(props: DataSelectorProps);
    render(): JSX.Element;
    private renderDataset;
    private renderDatasetPanel;
    private renderUploadPanel;
    private renderUrlPanel;
    private handleFileTypeChange;
    private renderPastePanel;
    private onDatasetChange;
    private onFileChange;
    private onDataTextSubmit;
    private loadDataString;
    private onDataUrlSubmit;
    private openModal;
    private closeModal;
    private handleTextChange;
}
export declare const DataSelector: React.ComponentClass<DataSelectorOwnProps>;
