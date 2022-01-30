export const minToMilliseconds = (value: number) => value * 60000;

export const sortObjects = (objs: Record<string, any>[], key: string, reversed: boolean) => {
    if(objs.length && Object.keys(objs).includes(key)){
        objs.sort((a, b) => {
            if(a[key] < b[key]) {
                return reversed ? 1 : -1;
            }else if(a[key] > b[key]){
                return reversed ? -1 : 1;
            }
            return 0;
        });
    }
}

export const getClassNames = (...names: string[]) => names.join(" ");

export const dateToString = (num: number) => {
    return new Date(num).toString();
}

export const toPercent = (value: number, base: number) => {
    return Math.floor(( value/base) * 100);
}