import { ApiProperty } from "@nestjs/swagger";

export class TokenVerifyDto {
  @ApiProperty()
  token: string;
}