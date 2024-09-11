"use strict";
const echoString = (arg) => {
    return arg;
};
const echo = (arg) => {
    return arg;
};
const isObj = (arg) => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
        return true;
    }
    return false;
};
