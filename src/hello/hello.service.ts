import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: '#',
    queue: 'queue',
  })
  sayHello(obj: string) {
    console.log(obj);
  }
}
