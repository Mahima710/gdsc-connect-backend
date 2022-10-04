import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class RegisterUserDto extends CreateUserDto {
  @ApiProperty()
  invite_code: string;
}
