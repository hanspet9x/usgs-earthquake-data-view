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