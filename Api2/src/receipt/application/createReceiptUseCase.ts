import {Receipt} from '../domain/receipt';
import {IReceiptRepository} from '../domain/IReceiptRepository';
import { NotificationNewReceipt } from './services/notificationNewReceipt';
import { ISocket } from "../domain/services/ISocket";
import signale from 'signale';

export class CreateReceiptUseCase {
    constructor(readonly repository : IReceiptRepository, readonly sendNotification: NotificationNewReceipt, readonly socket: ISocket) {}

    async run(total: number): Promise<void> {
        console.log(total)
        const createdAt = new Date();
        const updatedAt = new Date();
        
        const receipt = new Receipt(total, createdAt, updatedAt);

        try {
            await this.repository.create(receipt);
            await this.sendNotification.run(receipt);
            await this.socket.emitSocket("receipt", receipt);
            signale.success('Receipt created');
        } catch (error) {
            signale.error('Error creating receipt', error);
        }
    }
}