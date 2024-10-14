import { Module } from '@nestjs/common';
import { ViewsController } from './views.controller';
import { ContatosService } from '../contatos/contatos.service';
import { ContatosModule } from '../contatos/contatos.module';
import { ContactSchema } from '../contatos/entities/contato.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),ContatosModule],
  controllers: [ViewsController],
  providers: [ContatosService]
})
export class ViewsModule {}
