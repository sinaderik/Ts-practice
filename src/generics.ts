const echoString = (arg: string): string => {
    return arg
}

const echo = <T>(arg: T): T => {
    return arg
}

const isObj = <T>(arg: T): boolean => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
        return true
    }
    return false
}

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

// same function but using interface for its return type
interface CheckBoolean<T> {
    arg: T,
    is: boolean
}

const checkTrueOrFalse = <T>(arg: T): CheckBoolean<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

