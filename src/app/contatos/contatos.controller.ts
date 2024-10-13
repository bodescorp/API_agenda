import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { ContactDto } from './dto/contato.dto';

@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @Post()
  create(@Body() createContatoDto: CreateContatoDto): Promise<ContactDto> {
    return this.contatosService.create(createContatoDto);
  }

  @Get()
  findAll(): Promise<ContactDto[]> {
    return this.contatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ContactDto> {
    return this.contatosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto): Promise<ContactDto> {
    return this.contatosService.update(id, updateContatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatosService.remove(id);
  }
}
