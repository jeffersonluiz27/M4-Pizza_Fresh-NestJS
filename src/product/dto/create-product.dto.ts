import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Presunto',
  })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Pizza de Presunto, massa fresca e fina, fermentação natural',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do produto',
    example: 30.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'imagem do produto',
    example:
      'https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2-840x480.jpeg?q=75',
  })
  image: string;
}
