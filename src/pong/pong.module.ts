import { Module } from '@nestjs/common';
import { PongGateway } from "./pong.gateway";

@Module({
  controllers: [],
  providers: [PongGateway],
})
export class PongModule {}
