import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Client } from 'socket.io';
// import { Client } from "socket.io/dist/client";

@WebSocketGateway(81, { namespace: 'pong' })
export class PongGateway {
  @WebSocketServer()
  server: Server;
  handleConnection(client: Client) {}
  handleDisConnect(client: Client) {}

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

}
