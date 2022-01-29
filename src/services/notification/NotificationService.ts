import { INotification } from "./interfaces/Notification.types";

export class NotificationService implements INotification{
    sendEmail(email: string): Promise<boolean> {
        //make an api call to an email service.
        //simulate call
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
            resolve(true);
            }, 2000)
        })
    }

    sendSMS(phone: string): Promise<boolean> {
        //make an api call to an sms service.
        //simulate call
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
            resolve(true);
            }, 2000)
        })
    }

}