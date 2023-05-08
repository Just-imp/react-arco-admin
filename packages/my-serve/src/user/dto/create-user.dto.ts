import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length, Matches } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: '15988888888' })
    @Matches(/^1\d{10}$/g, { message: '请输入格式正确的手机号！' })
    phoneNumber: string;

    @ApiProperty({ example: 'password123' })
    @IsNotEmpty()
    @Length(6,20)
    password: string;

    @ApiProperty({ example: '123@xx.com' })
    email: string;
}
