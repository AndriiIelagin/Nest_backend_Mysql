import { Connection, Repository } from 'typeorm';
import { Item } from './item.entity';

export const itemProviders = [
  {
    provide: 'ITEM_REPOSITORY',
    useValue: Item,
    // useFactory: (connection: Connection) => connection.getRepository(Item),
    // inject: ['DATABASE_CONNECTION'],
  },
];
