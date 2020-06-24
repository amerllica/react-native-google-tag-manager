"use strict";

import { NativeModules } from 'react-native';

const RCTGtm = NativeModules.ReactNativeGtm;

const ReactNativeGtm = {
    openContainerWithId : function(containerId) {
        return (RCTGtm) ? RCTGtm.openContainerWithId(containerId) : new Promise((resolve,reject) => {
            reject(new Error('RCTGtm not found'));
        });
    },
    push : function(json) {
        return RCTGtm.push(json);
    }

}

module.exports = ReactNativeGtm;
