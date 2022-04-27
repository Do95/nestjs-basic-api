import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonDTO } from 'src/dto/pokemon.dto';
import { Pokemon } from 'src/entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon) private pokeRepo: Repository<Pokemon>,
  ) {}

  async findAll(): Promise<PokemonDTO[]> {
    return this.pokeRepo.find({ where: { is_active: true } });
  }

  async findOne(id: string): Promise<Pokemon> {
    const pokemon = await this.pokeRepo.findOne(id);
    if (pokemon && pokemon.is_active) {
      return pokemon;
    } else {
      return new Pokemon();
    }
  }

  async create(body: PokemonDTO): Promise<PokemonDTO> {
    const pokemon = this.pokeRepo.create(body);
    return this.pokeRepo.save(pokemon);
  }

  async update(id: string, body: PokemonDTO): Promise<PokemonDTO> {
    await this.pokeRepo.update(id, body);
    return this.pokeRepo.findOne(id);
  }

  async delete(id: string): Promise<any> {
    this.pokeRepo.delete(id);
    return true;
  }
}
