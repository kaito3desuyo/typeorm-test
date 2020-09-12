import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const TESTING_ORM_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_TEST_URL,
  synchronize: true,
  entities: [
    join(__dirname, '..', '..', 'src', 'libs', '**', '*.model.{ts,js}'),
  ],
  migrations: [],
};

export default TESTING_ORM_CONFIG;
