import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { ContatosModule } from './app/contatos/contatos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    ContatosModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
