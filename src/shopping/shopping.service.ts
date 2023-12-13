import { Injectable } from '@nestjs/common';
import { CreateShoppingDto } from './dto/create-shopping.dto';
import { UpdateShoppingDto } from './dto/update-shopping.dto';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import * as amqp from 'amqplib';

@Injectable()
export class ShoppingService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(createShoppingDto: CreateShoppingDto) {
    const product = {
      product_id: uuidv4(),
      ...createShoppingDto,
    };
    await this.prisma.product.create({
      data: product,
    });

    //this.infoQueue();

    return 'ok';
  }

  async infoQueue() {
    const connection = await amqp.connect(
      'amqps://kvmqtrbj:iLOjSy_NXLLlfeAPcRJy5lLXvspkW1qA@moose.rmq.cloudamqp.com/kvmqtrbj',
    );
    const channel = await connection.createChannel();

    const queueName = 'main_queue'; // Substitua pelo nome da sua fila

    const queueInfo = await channel.assertQueue(queueName, { durable: false });

    console.log(`Tamanho da fila ${queueName}: ${queueInfo} mensagens`);

    console.log(queueInfo);

    await channel.close();
    await connection.close();

    return queueInfo;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} shopping`;
  }
}
