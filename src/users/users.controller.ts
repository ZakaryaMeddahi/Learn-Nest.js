import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // Use Body() Decorator To Get Body Object From Request Object
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  // Extract The query Property From Request Object (req)
  findAll(@Query('role') role: string) {
    return this.usersService.findAll(role);
  }

  // Route Request To The Path That Have id parameter
  @Get(':id')
  // Use Param() Decorator To Extract Params From Request Object
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // Route Request To The Path That Have id parameter
  @Patch(':id')
  // Use Param() Decorator To Extract Params From Request Object
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // Route Request To The Path That Have id parameter
  @Delete(':id')
  // Use Param() Decorator To Extract Params From Request Object
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
