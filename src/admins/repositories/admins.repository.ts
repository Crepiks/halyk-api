import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entities/admin.entity';
import AdminModel from 'src/models/admin.model';

@Injectable()
export class AdminsRepository {
  findAll(): Promise<Admin[]> {
    return AdminModel.query();
  }
}
