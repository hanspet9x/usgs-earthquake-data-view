export interface INotification {
    sendEmail(email: string):Promise<boolean>;
    sendSMS?(phone: string):Promise<boolean>;
}