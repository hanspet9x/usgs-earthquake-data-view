
export class SubscriptionService{

    static subscribe(): Promise<boolean> {
        //make an api call to an subsciption service.
        //simulate call
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
            resolve(true);
            }, 2000)
        })
    }
    static unsubscribe(): Promise<boolean> {
        //make an api call to an subsciption service.
        //simulate call
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
            resolve(true);
            }, 2000)
        })
    }

}