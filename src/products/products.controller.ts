import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { OnEvent } from '@nestjs/event-emitter';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @OnEvent('user.created')
  async handleUserCreatedEvent(body: any) {
    console.log('Product', body);
  }
}
