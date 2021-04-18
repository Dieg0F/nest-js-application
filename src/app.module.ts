import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CatsController } from './controllers/cats.controller';
import { AccountsController } from './controllers/accounts.controller';
import { CatsService } from './services/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [
    AppController,
    CatsController,
    AccountsController
  ],
  providers: [
    AppService,
    CatsService
  ],
})
export class AppModule { }
