// import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { ShoppingService } from './shopping.service';
// import { CreateShoppingDto } from './dto/create-shopping.dto';
// import { UpdateShoppingDto } from './dto/update-shopping.dto';
// import {
//   Ctx,
//   EventPattern,
//   MessagePattern,
//   Payload,
//   RmqContext,
// } from '@nestjs/microservices';

// @Controller('shopping')
// export class ShoppingController {
//   constructor(private readonly shoppingService: ShoppingService) {}

//   @Post()
//   create(@Body() createShoppingDto: CreateShoppingDto) {
//     try {
//       return this.shoppingService.create(createShoppingDto);
//     } catch (e) {
//       console.log(e);
//       throw e;
//     }
//   }

//   @Get()
//   findAll() {
//     return this.shoppingService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.shoppingService.findOne(+id);
//   }

//   @EventPattern('hello')
//   async hello(@Payload() data: any, @Ctx() context: RmqContext) {
//     try {
//       console.log(data);

//       //console.log(context.getMessage());
//       //return this.shoppingService.create(data);
//     } catch (e) {
//       console.log(e);
//       throw e;
//     }
//   }

//   @EventPattern('read')
//   async read(@Payload() data: any, @Ctx() context: RmqContext) {
//     try {
//       console.log(data);
//     } catch (e) {
//       console.log(e);
//       throw e;
//     }
//   }
// }
