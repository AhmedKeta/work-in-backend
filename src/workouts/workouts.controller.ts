import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { WorkoutsService } from "./workouts.service";
import { Workout } from "./workout.entity";
import { CreateWorkoutDto, UpdateWorkoutDto } from "../dtos/workout.dto";
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from "@nestjs/swagger";

@Controller("workouts")
@ApiTags("workouts")
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  @ApiOperation({ summary: "Create a new workout entry" })
  @ApiBody({ type: CreateWorkoutDto })
  @ApiResponse({
    status: 201,
    description: "The workout entry has been successfully created.",
    type: Workout,
  })
  @ApiResponse({ status: 400, description: "Bad Request" })
  create(@Body() workout: CreateWorkoutDto): Promise<Workout> {
    return this.workoutsService.create(workout);
  }

  @Get()
  @ApiOperation({ summary: "Get all workout entries" })
  @ApiResponse({
    status: 200,
    description: "List of all workout entries",
    type: [Workout],
  })
  findAll(): Promise<Workout[]> {
    return this.workoutsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a workout entry by ID" })
  @ApiParam({ name: "id", description: "The ID of the workout entry" })
  @ApiResponse({
    status: 200,
    description: "The workout entry details",
    type: Workout,
  })
  @ApiResponse({ status: 404, description: "Workout entry not found" })
  findOne(@Param("id") id: number): Promise<Workout> {
    return this.workoutsService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update a workout entry by ID" })
  @ApiParam({ name: "id", description: "The ID of the workout entry" })
  @ApiBody({ type: UpdateWorkoutDto })
  @ApiResponse({
    status: 200,
    description: "The workout entry has been successfully updated.",
    type: Workout,
  })
  @ApiResponse({ status: 404, description: "Workout entry not found" })
  update(
    @Param("id") id: number,
    @Body() workout: UpdateWorkoutDto,
  ): Promise<void> {
    return this.workoutsService.update(id, workout);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a workout entry by ID" })
  @ApiParam({ name: "id", description: "The ID of the workout entry" })
  @ApiResponse({
    status: 200,
    description: "The workout entry has been successfully deleted.",
  })
  @ApiResponse({ status: 404, description: "Workout entry not found" })
  remove(@Param("id") id: number): Promise<void> {
    return this.workoutsService.remove(id);
  }
}
