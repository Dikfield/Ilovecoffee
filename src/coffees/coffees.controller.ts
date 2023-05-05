import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll();
  }

  @Get('/:id')
  fineOne(@Param('id') id: string) {
    return this.fineOne(id);
  }

  @Post()
  create(@Body() createCoffee: CreateCoffeeDto) {
    return this.create(createCoffee);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateCoffee: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffee);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
