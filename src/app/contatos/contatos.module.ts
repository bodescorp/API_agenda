import { Module } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { ContatosController } from './contatos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './entities/contato.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  controllers: [ContatosController],
  providers: [ContatosService],
})
export class ContatosModule {}
