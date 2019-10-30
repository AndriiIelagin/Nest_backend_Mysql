import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { itemProviders } from './item.providers';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Item]),DatabaseModule],
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [...itemProviders, ItemsService],
})
export class ItemsModule {}
