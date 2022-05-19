import { MessageResponse } from '../constants/message-response';
export class Response<T> {
  constructor(
    public data: T,
    public message = MessageResponse.GENERAL,
    public statusCode = 200,
  ) {}

  static created(data: any, message?: string) {
    return new Response(data, message, 201);
  }
}
