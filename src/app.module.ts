import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import typeORMConfig from 'typeorm.config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UsersModule],
  providers: [AppService],
})
export class AppModule {}
