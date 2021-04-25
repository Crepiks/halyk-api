import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VolunteersService } from './volunteers.service';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';

@Controller('api/volunteers')
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) {}

  @Get()
  async findAll() {
    return {
      volunteers: await this.volunteersService.findAll(),
    };
  }

  @Post()
  create(@Body() createVolunteerDto: CreateVolunteerDto) {
    return this.volunteersService.create(createVolunteerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.volunteersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVolunteerDto: UpdateVolunteerDto,
  ) {
    return this.volunteersService.update(+id, updateVolunteerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.volunteersService.remove(+id);
  }
}
