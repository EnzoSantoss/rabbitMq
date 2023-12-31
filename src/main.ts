import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.create(AppModule, {
    //   transport: Transport.RMQ,
    //   options: {
    //     urls: [process.env.RBMQ],
    //     queue: 'main_queue',
    //     queueOptions: {
    //       durable: false,
    //     },
    //   },
  });

  app.listen(3002);
}
bootstrap();
