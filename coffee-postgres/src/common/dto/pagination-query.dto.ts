// import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // not needed b/c of enableImplicitConversion in msin.ts
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // not needed b/c of enableImplicitConversion in msin.ts
  offset: number;
}
