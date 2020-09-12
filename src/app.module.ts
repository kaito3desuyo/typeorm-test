import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ORM_CONFIG from './core/config/ormconfig';
import { UserModule } from './libs/users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ORM_CONFIG,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
