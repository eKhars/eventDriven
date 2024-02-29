import {Payment} from './payment';

export interface PaymentRepository {
  create(payment: Payment): Promise<void>;
}
