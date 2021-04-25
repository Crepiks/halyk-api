import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entities/admin.entity';
import AdminModel from 'src/models/admin.model';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { UpdateAdminDto } from '../dto/update-admin.dto';

@Injectable()
export class AdminsRepository {
  findAll(): Promise<Admin[]> {
    return AdminModel.query();
  }

  insertAndFetch(payload: CreateAdminDto): Promise<Admin> {
    return AdminModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Admin> {
    return AdminModel.query().findById(id);
  }

  patchAndFetchById(id: number, payload: UpdateAdminDto): Promise<Admin> {
    return AdminModel.query().patchAndFetchById(id, payload);
  }
}
