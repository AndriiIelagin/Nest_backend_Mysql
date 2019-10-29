import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TypeOrmModule.forRoot(),DatabaseModule, ItemsModule],
  // controllers: [AppController, ItemsController],
  // providers: [AppService, ItemsService],
})
export class AppModule {}
