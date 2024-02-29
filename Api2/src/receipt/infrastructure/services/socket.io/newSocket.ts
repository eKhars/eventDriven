import socketClient from 'socket.io-client';
import { ISocket } from '../../../domain/services/ISocket';
import ioClient from "socket.io-client";


export class NewSocket implements ISocket {
  private url: string;

  constructor() {
    this.url = process.env.SOCKET_URL || 'http://localhost:3002';
  }

  async emitSocket(event: string, data: any): Promise<boolean> {
    try {
      const socket = socketClient(this.url);
      socket.emit( event, data);
      console.log('Mensaje emitido correctamente', event);
      return true;
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      return false;
    }
  }
}
