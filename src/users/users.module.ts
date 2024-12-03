import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BullModule } from '@nestjs/bullmq';
import { QueueName } from 'src/app.interface';
import { EmailConsumber } from './email.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QueueName.EMAIL,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, EmailConsumber],
})
export class UsersModule {}
