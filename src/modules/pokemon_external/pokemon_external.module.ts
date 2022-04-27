import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokemonExternalController } from 'src/controllers/pokemon_external/pokemon_external.controller';
import { PokemonExternalService } from 'src/services/pokemon_external/pokemon_external.service';

@Module({
  imports: [HttpModule],
  controllers: [PokemonExternalController],
  providers: [PokemonExternalService],
})
export class PokemonExternalModule {}
