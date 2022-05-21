import { ApiProperty } from '@nestjs/swagger';
import { MessageResponse } from '../constants/message-response';

//generico no funcione con swagger, se lo quita y pone "any" a la data :(
export class Response {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: any;

  constructor(data: any, message = MessageResponse.GENERAL, statusCode = 200) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static created(data: any, message?: string) {
    return new Response(data, message, 201);
  }
}
