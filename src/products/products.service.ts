import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class ProductsService {
  @OnEvent('user.created')
  async handleUserCreatedEvent(body: any) {
    console.log('Product Service', body);
  }
}
