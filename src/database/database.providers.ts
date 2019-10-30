import { createConnection } from 'typeorm';
import { Item } from '../items/item.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test_typeorm',
        entities: [Item],
        synchronize: true,
      }),
  },
];
