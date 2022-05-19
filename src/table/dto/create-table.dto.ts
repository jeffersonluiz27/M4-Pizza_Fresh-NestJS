import { IsPositive, IsNumber } from 'class-validator';

export class CreateTableDto {
  @IsPositive()
  @IsNumber()
  number: number;
}
