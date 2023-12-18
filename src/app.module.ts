import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
//import { ShoppingModule } from './shopping/shopping.module';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'minhaEx',
          type: 'direct',
        },
      ],
      uri: 'amqps://kvmqtrbj:iLOjSy_NXLLlfeAPcRJy5lLXvspkW1qA@moose.rmq.cloudamqp.com/kvmqtrbj',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
