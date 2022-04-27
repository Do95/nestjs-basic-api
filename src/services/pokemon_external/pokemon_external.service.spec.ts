import { Test, TestingModule } from '@nestjs/testing';
import { PokemonExternalService } from './pokemon_external.service';

describe('PokemonExternalService', () => {
  let service: PokemonExternalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonExternalService],
    }).compile();

    service = module.get<PokemonExternalService>(PokemonExternalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
