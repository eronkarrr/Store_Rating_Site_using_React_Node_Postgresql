// src/users/dto/create-user.dto.ts

import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Role } from '../../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @MinLength(20)
  @MaxLength(60)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(400)
  address: string;

  @Matches(/^(?=.*[A-Z])(?=.*[\W_]).{8,16}$/, {
    message:
      'Password must be 8-16 characters long, include one uppercase letter and one special character.',
  })
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
