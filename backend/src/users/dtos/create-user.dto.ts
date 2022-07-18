/* eslint-disable */
import { IsEmail, IsString,IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
