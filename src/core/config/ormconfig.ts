import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { join } from 'path';

const ORM_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  entities: [join(__dirname, '..', '..', 'libs', '**', '*.model.{ts,js}')],
  migrations: [],
};

export default ORM_CONFIG;
