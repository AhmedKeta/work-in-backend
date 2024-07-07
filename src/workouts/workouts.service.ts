import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './workout.entity';
import { CreateWorkoutDto, UpdateWorkoutDto } from 'src/dtos/workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout)
    private workoutsRepository: Repository<Workout>,
  ) {}

  findAll(): Promise<Workout[]> {
    return this.workoutsRepository.find();
  }

  findOne(id: number): Promise<Workout> {
    return this.workoutsRepository.findOneBy({ id });
  }

  create(workout: CreateWorkoutDto): Promise<Workout> {
    return this.workoutsRepository.save(workout);
  }

  async update(id: number, workout: UpdateWorkoutDto): Promise<void> {
    await this.workoutsRepository.update(id, workout);
  }

  async remove(id: number): Promise<void> {
    await this.workoutsRepository.delete(id);
  }
}
