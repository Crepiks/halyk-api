import { Injectable } from '@nestjs/common';
import { Volunteer } from 'src/entities/volunteer.entity';
import VolunteerModel from 'src/models/volunteer.model';

@Injectable()
export class VolunteersRepository {
  findAll(): Promise<Volunteer[]> {
    return VolunteerModel.query();
  }
}
