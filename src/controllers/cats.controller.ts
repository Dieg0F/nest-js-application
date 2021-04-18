import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Cat } from 'src/models/cat.model';
import { CatsService } from 'src/services/cats.service';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() cat: Cat) {
        this.catsService.create(cat);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
