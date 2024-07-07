import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { WeightsService } from "./weights.service";
import { Weight } from "./weight.entity";
import { CreateWeightDto, UpdateWeightDto } from "../dtos/weight.dto";
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from "@nestjs/swagger";

@Controller("weights")
@ApiTags("weights")
export class WeightsController {
  constructor(private readonly weightsService: WeightsService) {}

  @Post()
  @ApiOperation({ summary: "Create a new weight entry" })
  @ApiBody({ type: CreateWeightDto })
  @ApiResponse({
    status: 201,
    description: "The weight entry has been successfully created.",
    type: Weight,
  })
  @ApiResponse({ status: 400, description: "Bad Request" })
  create(@Body() createWeightDto: CreateWeightDto): Promise<Weight> {
    return this.weightsService.create(createWeightDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all weight entries" })
  @ApiResponse({
    status: 200,
    description: "List of all weight entries",
    type: [Weight],
  })
  findAll(): Promise<Weight[]> {
    return this.weightsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a weight entry by ID" })
  @ApiParam({ name: "id", description: "The ID of the weight entry" })
  @ApiResponse({
    status: 200,
    description: "The weight entry details",
    type: Weight,
  })
  @ApiResponse({ status: 404, description: "Weight entry not found" })
  findOne(@Param("id") id: number): Promise<Weight> {
    return this.weightsService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update a weight entry by ID" })
  @ApiParam({ name: "id", description: "The ID of the weight entry" })
  @ApiBody({ type: UpdateWeightDto })
  @ApiResponse({
    status: 200,
    description: "The weight entry has been successfully updated.",
    type: Weight,
  })
  @ApiResponse({ status: 404, description: "Weight entry not found" })
  update(
    @Param("id") id: number,
    @Body() updateWeightDto: UpdateWeightDto,
  ): Promise<Weight> {
    return this.weightsService.update(id, updateWeightDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a weight entry by ID" })
  @ApiParam({ name: "id", description: "The ID of the weight entry" })
  @ApiResponse({
    status: 200,
    description: "The weight entry has been successfully deleted.",
  })
  @ApiResponse({ status: 404, description: "Weight entry not found" })
  remove(@Param("id") id: number): Promise<void> {
    return this.weightsService.remove(id);
  }
}
