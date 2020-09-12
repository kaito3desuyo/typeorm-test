import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppService } from './app.service';
import { UserModel } from './libs/users/user.model';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(UserModel)
    private readonly repo: Repository<UserModel>,
  ) {}

  @Get()
  getHello(): any {
    return this.repo.save({ name: 'hoge' });
  }
}
