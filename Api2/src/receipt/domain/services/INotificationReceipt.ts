import {Receipt} from "../receipt";

export interface INotificationReceipt {
    sendNotification(receipt: Receipt): Promise<boolean>;
}