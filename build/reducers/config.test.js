"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../actions/config");
var config_2 = require("./config");
describe('reducers/config', function () {
    describe(config_1.SET_CONFIG, function () {
        it('returns new voyager state with config.showDatasetSelector set to true', function () {
            expect(config_2.configReducer({}, {
                type: config_1.SET_CONFIG,
                payload: {
                    config: {
                        showDataSourceSelector: true
                    }
                }
            })).toEqual({
                showDataSourceSelector: true
            });
        });
        it('returns new voyager state with config.showDatasetSelector set to false', function () {
            expect(config_2.configReducer({}, {
                type: config_1.SET_CONFIG,
                payload: {
                    config: {
                        showDataSourceSelector: false
                    }
                }
            })).toEqual({
                showDataSourceSelector: false
            });
        });
    });
});
//# sourceMappingURL=config.test.js.map