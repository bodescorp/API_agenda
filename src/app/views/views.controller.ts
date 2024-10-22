import { Body, Controller, Get, Param, Post, Render, Res } from '@nestjs/common';
import { ContatosService } from '../contatos/contatos.service';
import { UpdateContatoDto } from '../contatos/dto/update-contato.dto';
import { Response } from 'express';
import { CreateContatoDto } from '../contatos/dto/create-contato.dto';


@Controller('views')
export class ViewsController {
    constructor(
        private readonly contatosService: ContatosService
    ) { }

    @Get('/contatos/create')
    @Render('contatos/create')
    showCreateForm() {
        return;
    }

    @Post('/contatos/create')
    async createContact(
        @Body() createContatoDto: CreateContatoDto,
        @Res() res: Response,
    ) {
        createContatoDto.point = {
            type: 'Point',
            coordinates: [
                createContatoDto.point.coordinates[0], // Longitude
                createContatoDto.point.coordinates[1]  // Latitude
            ]
        };
        await this.contatosService.create(createContatoDto);
        return res.redirect('/views/contatos');
    }

    @Get('contatos/')
    @Render('contatos/list')
    async handleList() {
        const contatos = await this.contatosService.findAll();
        return { contatos }

    }
    @Get('/contatos/:id/edit')
    @Render('contatos/edit')
    async editContact(@Param('id') id: string) {
        const contact = await this.contatosService.findOne(id);
        return { contact };
    }

    @Post('/contatos/:id/delete')
    async deleteContact(@Param('id') id: string, @Res() res: Response) {
        await this.contatosService.remove(id);
        return res.redirect('/views/contatos/');
    }

    @Post('/contatos/:id/edit')
    async updateContact(
        @Param('id') id: string,
        @Body() updateContatoDto: UpdateContatoDto,
        @Res() res: Response
    ) {
        await this.contatosService.update(id, updateContatoDto);
        return res.redirect('/views/contatos/');
    }
}
