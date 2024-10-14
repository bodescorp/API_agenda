import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContatosModule } from './app/contatos/contatos.module';
import { ViewsModule } from './app/views/views.module';
import { DbModule } from './app/db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    ContatosModule,
    ViewsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
