import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `this will return one movie with id: ${id}`;
  }
  @Post()
  create() {
    return 'this will create movie';
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `this will delete a movie with the id: ${id}`;
  }
  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `this will update a movie with the id: ${id}`;
  }
}
