import { IsEnum, MinLength } from 'class-validator';

export enum Rank {
  BLACK = 'black',
  BLUE = 'blue',
}

export class CreateNinjaDto {
  @MinLength(5)
  name: string;

  @IsEnum(Rank, { message: 'Rank Should Be Black Or Blue' })
  rank: Rank;

  available: boolean;
}

// We Use Decorators Provided By class-validator Library To Check
// The Type Of The Property
