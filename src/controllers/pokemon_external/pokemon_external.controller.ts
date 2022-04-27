import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PokemonExternalService } from 'src/services/pokemon_external/pokemon_external.service';
@ApiTags('Official Pokemons')
@Controller('api/v2/pokemon')
export class PokemonExternalController {
  constructor(private pokeExternal: PokemonExternalService) {}
  @Get()
  @ApiOperation({ summary: 'Return all pokemons from Official API Pokemon' })
  async findAll(): Promise<any> {
    return await this.pokeExternal.findAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Return pokemon from Official API' })
  async find(@Param('id') id: string): Promise<any> {
    return await this.pokeExternal.find(id);
  }
}
