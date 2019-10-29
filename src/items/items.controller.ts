import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll().then(items => items);
  }

  // @Get(':id')
  // findOne(@Param('id') id): Promise<Item> {
  //   return this.itemsService.findOne(id).then(item => item);
  // }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete item ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update item ${id} - Name ${updateItemDto.name}`;
  }
}
