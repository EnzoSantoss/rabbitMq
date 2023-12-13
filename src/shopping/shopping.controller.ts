import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { CreateShoppingDto } from './dto/create-shopping.dto';
import { UpdateShoppingDto } from './dto/update-shopping.dto';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('shopping')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingService) {}

  @Post()
  create(@Body() createShoppingDto: CreateShoppingDto) {
    try {
      return this.shoppingService.create(createShoppingDto);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  @Get()
  findAll() {
    return this.shoppingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingService.findOne(+id);
  }

  @MessagePattern('hello')
  async hello(data: any) {
    try {
      return this.shoppingService.create(data);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
