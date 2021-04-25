import { Injectable } from '@nestjs/common';
import { Volunteer } from 'src/entities/volunteer.entity';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { VolunteersRepository } from './repositories/volunteers.repository';

@Injectable()
export class VolunteersService {
  constructor(private readonly volunteersRepository: VolunteersRepository) {}

  findAll(): Promise<Volunteer[]> {
    return this.volunteersRepository.findAll();
  }

  create(createVolunteerDto: CreateVolunteerDto) {
    return 'This action adds a new volunteer';
  }

  findOne(id: number) {
    return `This action returns a #${id} volunteer`;
  }

  update(id: number, updateVolunteerDto: UpdateVolunteerDto) {
    return `This action updates a #${id} volunteer`;
  }

  remove(id: number) {
    return `This action removes a #${id} volunteer`;
  }
}
