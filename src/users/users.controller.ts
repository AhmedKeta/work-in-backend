// src/users/users.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from "@nestjs/swagger";

@Controller("users")
@ApiTags("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: "Create a new user" })
  @ApiBody({ type: User })
  @ApiResponse({
    status: 201,
    description: "The user has been successfully created.",
    type: User,
  })
  @ApiResponse({ status: 400, description: "Bad Request" })
  create(@Body() createUserDto: Partial<User>): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, description: "List of all users", type: [User] })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a user by ID" })
  @ApiParam({ name: "id", description: "The ID of the user" })
  @ApiResponse({ status: 200, description: "The user details", type: User })
  @ApiResponse({ status: 404, description: "User not found" })
  findOne(@Param("id") id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update a user by ID" })
  @ApiParam({ name: "id", description: "The ID of the user" })
  @ApiBody({ type: User })
  @ApiResponse({
    status: 200,
    description: "The user has been successfully updated.",
    type: User,
  })
  @ApiResponse({ status: 404, description: "User not found" })
  update(
    @Param("id") id: number,
    @Body() updateUserDto: Partial<User>,
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a user by ID" })
  @ApiParam({ name: "id", description: "The ID of the user" })
  @ApiResponse({
    status: 200,
    description: "The user has been successfully deleted.",
  })
  @ApiResponse({ status: 404, description: "User not found" })
  remove(@Param("id") id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
