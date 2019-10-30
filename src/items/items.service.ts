import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';
// import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(
    // @InjectRepository(Item)
    @Inject('ITEM_REPOSITORY')
    private readonly itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }
  async findOne(id: number): Promise<Item> {
    return await this.itemRepository.findOne({ id });
  }
  async create(item: CreateItemDto): Promise<Item> {
    return await this.itemRepository.save(item);
  }
  async update(id: number, item: CreateItemDto): Promise<UpdateResult> {
    return await this.itemRepository.update(id, item);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.itemRepository.delete({ id });
  }
}
