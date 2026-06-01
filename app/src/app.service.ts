import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  saludoDesdeLaRaiz(): string {
    return 'saludo desde la raiz';
  }
}
