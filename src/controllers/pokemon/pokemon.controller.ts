import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PokemonDTO } from 'src/dto/pokemon.dto';
import { Pokemon } from 'src/entities/pokemon.entity';
import { PokemonService } from 'src/services/pokemon/pokemon.service';
@ApiTags('Pokemons')
@Controller('api/v1/pokemon')
export class PokemonController {
  constructor(private PokeService: PokemonService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Return all pokemons' })
  async findAll(): Promise<PokemonDTO[]> {
    return await this.PokeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Show pokemon' })
  async find(@Param('id') id: string): Promise<Pokemon> {
    return await this.PokeService.findOne(id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create new pokemon' })
  async create(@Body() body: PokemonDTO): Promise<PokemonDTO> {
    return await this.PokeService.create(body);
  }

  @Put('update/:id')
  @ApiOperation({ summary: 'Update info pokemon' })
  async update(
    @Param('id') id: string,
    @Body() body: PokemonDTO,
  ): Promise<PokemonDTO> {
    return await this.PokeService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete pokemon' })
  async delete(@Param('id') id: string): Promise<any> {
    return await this.PokeService.delete(id);
  }
}
