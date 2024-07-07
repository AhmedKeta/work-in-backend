import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Weight } from "./weight.entity";

@Injectable()
export class WeightsService {
  constructor(
    @InjectRepository(Weight)
    private weightsRepository: Repository<Weight>,
  ) {}

  create(weight: Partial<Weight>): Promise<Weight> {
    const newWeight = this.weightsRepository.create(weight);
    return this.weightsRepository.save(newWeight);
  }

  findAll(): Promise<Weight[]> {
    return this.weightsRepository.find({ relations: ["user"] });
  }

  findOne(id: number): Promise<Weight> {
    return this.weightsRepository.findOne({
      where: { id },
      relations: ["user"],
    });
  }

  async update(id: number, updateWeightDto: Partial<Weight>): Promise<Weight> {
    await this.weightsRepository.update(id, updateWeightDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.weightsRepository.delete(id);
  }
}
