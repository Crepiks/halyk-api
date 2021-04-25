import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number): Promise<Admin> {
    const admin = await this.adminsRepository.findById(id);
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    return admin;
  }

  async update(id: number, payload: UpdateAdminDto): Promise<Admin> {
    const admin = await this.adminsRepository.patchAndFetchById(id, payload);
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    return admin;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.adminsRepository.deleteById(id);
    if (!rowsDeleted) {
      throw new NotFoundException('Admin not found');
    }
  }
}
