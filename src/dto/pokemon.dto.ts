import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PokemonDTO {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly id?: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly image: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  readonly is_active: boolean;
}
