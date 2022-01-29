export interface ISubscription {
    subscribe():Promise<boolean>;
    unsubscribe():Promise<boolean>;
}