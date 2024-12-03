import { OnEvent } from '@nestjs/event-emitter';

export class Utils {
  @OnEvent('user.created')
  handleUserCreatedEvent(payload: any) {
    console.log('Utils', payload);
  }
}
