import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './../src/libs/users/user.model';
import { UserModule } from './../src/libs/users/user.module';
import { getConnection, Repository } from 'typeorm';
import TESTING_ORM_CONFIG from './config/testing-ormconfig';
import * as request from 'supertest';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let userRepo: Repository<UserModel>;

  beforeAll(async () => {
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();

    const module = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(TESTING_ORM_CONFIG), UserModule],
    }).compile();

    app = module.createNestApplication();

    await app.init();

    userRepo = module.get<Repository<UserModel>>(getRepositoryToken(UserModel));

    await Promise.all([...Array(10000)].map(() => userRepo.delete({})));
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/ (GET)', () => {
    beforeEach(async () => {
      const data = [
        {
          name: 'hoge',
          tasks: [
            {
              name: 'hogehoge',
            },
          ],
        },
        {
          name: 'fuga',
          tasks: [
            {
              name: 'hogehoge',
            },
          ],
        },
        {
          name: 'hoge',
          tasks: [
            {
              name: 'hogehoge',
            },
          ],
        },
        {
          name: 'hoge',
          tasks: [
            {
              name: 'hogehoge',
            },
          ],
        },
      ];

      await Promise.all(
        [...Array(10)].map(() => {
          return userRepo.save(data);
        }),
      );

      /*
      await Promise.all(
        [...Array(100)].map(() => {
          return getConnection().query('TRUNCATE user_model CASCADE');
        }),
      );
      */

      /*
      Promise.all(
        [...Array(1000)].map(() => {
          return userRepo.find();
        }),
      );
      */
    });

    afterEach(async () => {
      await userRepo.delete({});
    });

    [...Array(10)].forEach(() => {
      it('test', async () => {
        return request(app.getHttpServer())
          .get('/users')
          .expect(200);
      });
    });
  });

  describe('/ (POST)', () => {
    afterEach(async () => {
      await userRepo.delete({});
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .expect(201);
    });
  });

  describe('/ (PUT)', () => {
    let result: UserModel[];

    beforeEach(async () => {
      const data = [
        {
          name: 'hoge',
        },
      ];

      result = await userRepo.save(data);
    });

    afterEach(async () => {
      await userRepo.delete({});
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });

    it('test', async () => {
      return request(app.getHttpServer())
        .put('/users/' + result[0].id)
        .expect(200);
    });
  });
});
