import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
// import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(
    // @InjectRepository(Item)
    @Inject('ITEM_REPOSITORY')
    private readonly itemRepository: Repository<Item>,
  ) {}

async findAll(): Promise<Item[]> {
  return await this.itemRepository.find()
}
// async findOne(id: number): Promise<Item> {
//   return await this.itemRepository.findOne(id)
// }

  // private readonly items: Item[] = [
  //   {
  //     id: '1234567896',
  //     name: 'Item One',
  //     description: 'This is item one',
  //     qty: 100
  //   },
  //   {
  //     id: '456791456456',
  //     name: 'Item Two',
  //     description: 'This is item two',
  //     qty: 50
  //   }
  // ]

  // findAll(): Item[] {
  //   return this.items;
  // }

  // findOne(id: string): Item {
  //   return this.items.find(item => item.id === id)
  // }
}
