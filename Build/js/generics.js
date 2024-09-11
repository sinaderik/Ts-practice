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
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length === 0) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkTrueOrFalse = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length === 0) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
