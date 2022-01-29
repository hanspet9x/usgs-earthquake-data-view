import { ISubscription } from "./interface/Subsctiption.types";

export class SubscriptionService implements ISubscription{

    subscribe(): Promise<boolean> {
        //make an api call to an subsciption service.
        //simulate call
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
            resolve(true);
            }, 2000)
        })
    }
    unsubscribe(): Promise<boolean> {
        //make an api call to an subsciption service.
        //simulate call
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
            resolve(true);
            }, 2000)
        })
    }

}