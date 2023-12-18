// import { Injectable } from '@nestjs/common';
// import { CreateShoppingDto } from './dto/create-shopping.dto';
// import { UpdateShoppingDto } from './dto/update-shopping.dto';
// import { PrismaClient } from '@prisma/client';
// import { v4 as uuidv4 } from 'uuid';
// import * as amqp from 'amqplib';

// @Injectable()
// export class ShoppingService {
//   private prisma: PrismaClient;
//   constructor() {
//     this.prisma = new PrismaClient();
//   }
//   async create(createShoppingDto: CreateShoppingDto) {
//     const product = {
//       product_id: uuidv4(),
//       ...createShoppingDto,
//     };
//     await this.prisma.product.create({
//       data: product,
//     });

//     //this.infoQueue();

//     return 'ok';
//   }

//   async findAll() {
//     return await this.prisma.product.findMany();
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} shopping`;
//   }
// }
