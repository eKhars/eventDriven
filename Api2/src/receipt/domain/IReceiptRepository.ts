import {Receipt} from './receipt';

export interface IReceiptRepository {
    create(receipt: Receipt): Promise<void>;
}