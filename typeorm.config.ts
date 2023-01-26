import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'registration',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};

export default typeORMConfig;
