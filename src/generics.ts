const echoString = (arg: string): string => {
    return arg
}

const echo = <T>(arg: T): T => {
    return arg
}

const isObj = <T>(arg: T): boolean => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null){
        return true
    }
    return false
}

