import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactDto } from './dto/contato.dto';

@Injectable()
export class ContatosService {
  constructor(
    @InjectModel('Contact') private readonly contactModel: Model<ContactDto>,
  ) { }

  async create(createContatoDto: CreateContatoDto) {
    const newContact = new this.contactModel(createContatoDto);
    return await newContact.save();
  }

  async findAll(): Promise<ContactDto[]> {
    return await this.contactModel.find().exec();
  }

  async findOne(id: string): Promise<ContactDto> {
    return await this.contactModel.findById(id).exec();
  }

  async update(id: string, updateContatoDto: UpdateContatoDto): Promise<ContactDto> {
    await this.contactModel.updateOne({ _id: id }, updateContatoDto).exec()
    return this.findOne(id)
  }

  async remove(id: string): Promise<ContactDto> {
    return await this.contactModel.findByIdAndDelete(id).exec();
  }
}
