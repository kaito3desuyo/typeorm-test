import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { UserModel } from './user.model';

@Controller('/users')
export class UserController {
  constructor(
    @InjectRepository(UserModel)
    private readonly repo: Repository<UserModel>,
  ) {}

  @Transactional()
  @Get()
  async getUsers() {
    const result = Promise.all(
      [...Array(100)].map(() => this.repo.createQueryBuilder().getMany()),
    );
    return result;
  }

  @Post() postUsers() {
    return this.repo.save({
      name: 'fuga',
    });
  }

  @Put('/:id') putUsers(@Param('id') id: string) {
    return this.repo.save({
      id: Number(id),
      name: 'fuga',
    });
  }
}
