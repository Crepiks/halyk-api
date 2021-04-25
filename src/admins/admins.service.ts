import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminsRepository } from './repositories/admins.repository';

@Injectable()
export class AdminsService {
  constructor(private readonly adminsRepository: AdminsRepository) {}

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.findAll();
  }

  create(payload: CreateAdminDto): Promise<Admin> {
    return this.adminsRepository.insertAndFetch(payload);
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
