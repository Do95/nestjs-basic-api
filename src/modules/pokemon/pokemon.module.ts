import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonController } from 'src/controllers/pokemon/pokemon.controller';
import { Pokemon } from 'src/entities/pokemon.entity';
import { PokemonService } from 'src/services/pokemon/pokemon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
