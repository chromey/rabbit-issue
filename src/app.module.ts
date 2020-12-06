import { MessageHandlerErrorBehavior, RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloService } from './hello/hello.service';

@Module({
  imports: [ RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges: [
      {
        name: 'exchange1',
        type: 'topic',
      },
    ],
    uri: 'amqp://guest:guest@localhost:5672',
    defaultSubscribeErrorBehavior: MessageHandlerErrorBehavior.ACK,
    connectionInitOptions: { wait: false },
  })],
  controllers: [AppController],
  providers: [AppService, HelloService],
})
export class AppModule {}
