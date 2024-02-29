import amqplib from "amqplib";
import { Payment } from "../../domain/payment";
import { INotification } from "../../domain/services/Inotification";
import dotenv from "dotenv";
dotenv.config();

export class NewPaymentNotification implements INotification {
  private url: string;
  private exchange: string;

  constructor() {
    this.url = process.env.CLOUDAMQP_URL || "";
    this.exchange = process.env.CLOUDAMQP_EXCHANGE || "";
  }

  async sendNotification(payment: Payment): Promise<boolean> {
    let conn, ch, queue;
    try {
      conn = await amqplib.connect(this.url);
      ch = await conn.createChannel();
      queue = await ch.assertQueue(this.exchange, { durable: true });
      ch.sendToQueue(this.exchange, Buffer.from(JSON.stringify(payment)));
      const status = await ch.publish(
        this.exchange,
        "",
        Buffer.from(JSON.stringify(payment))
      );
      console.log("Contenido del mensaje:", JSON.stringify(payment));
      console.log("Estatus:", status);
      return status;
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      return false;
    } finally {
      if (ch) {
        await ch.close();
        console.log("Canal cerrado");
      }
      if (conn) {
        await conn.close();
        console.log("Conexión cerrada");
      }
    }
  }
}
