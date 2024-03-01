"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_undo_1 = require("redux-undo");
var vega_util_1 = require("vega-util");
var api_1 = require("../api/api");
var selectors_1 = require("../selectors");
var reset_1 = require("./reset");
exports.DATASET_SCHEMA_CHANGE_FIELD_TYPE = 'DATASET_SCHEMA_CHANGE_FIELD_TYPE';
exports.DATASET_SCHEMA_CHANGE_ORDINAL_DOMAIN = 'DATASET_SCHEMA_CHANGE_ORDINAL_DOMAIN';
exports.DATASET_REQUEST = 'DATASET_REQUEST';
exports.DATASET_RECEIVE = 'DATASET_RECEIVE';
function datasetLoad(name, data) {
    return function (dispatch, getState) {
        var config = selectors_1.selectConfig(getState());
        dispatch({ type: reset_1.RESET });
        dispatch({
            type: exports.DATASET_REQUEST,
            payload: { name: name }
        });
        // // Get the new dataset
        // if (isUrlData(data)) {
        //   return fetch(data.url)
        //     .then(response => response.json())
        //     .catch(errorCatch)
        //     .then((values: any) => {
        //       console.log('values xx', values);
        //       return buildSchemaAndDispatchDataReceive({values}, config, dispatch, name);
        //     });
        // } else if (isInlineData(data)) {
        //   return buildSchemaAndDispatchDataReceive(data, config, dispatch, name);
        // } else {
        //   throw new Error('dataset load error: dataset type not detected');
        // }
        // const data: any = {
        //   "values": [
        //     {"fieldA": "A", "fieldB": 28}, {"fieldA": "B", "fieldB": 55}, {"fieldA": "C", "fieldB": 43},
        //     {"fieldA": "D", "fieldB": 91}, {"fieldA": "E", "fieldB": 81}, {"fieldA": "F", "fieldB": 53},
        //     {"fieldA": "G", "fieldB": 19}, {"fieldA": "H", "fieldB": 87}, {"fieldA": "I", "fieldB": 52}
        //   ]
        // };
        console.log('data', data);
        return buildSchemaAndDispatchDataReceive({ values: data }, config, dispatch, null);
    };
}
exports.datasetLoad = datasetLoad;
;
function buildSchemaAndDispatchDataReceive(data, config, dispatch, name) {
    if (!vega_util_1.isArray(data.values)) {
        throw new Error('Voyager only supports array values');
    }
    return api_1.fetchCompassQLBuildSchema(data.values, config)
        .catch(errorCatch)
        .then(function (schema) {
        console.log('schema', schema);
        dispatch({
            type: exports.DATASET_RECEIVE,
            payload: { name: name, schema: schema, data: data }
        });
        dispatch(redux_undo_1.ActionCreators.clearHistory());
    });
}
function errorCatch(err) {
    window.alert(err.message);
}
//# sourceMappingURL=dataset.js.map