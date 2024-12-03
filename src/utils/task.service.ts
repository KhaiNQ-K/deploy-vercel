import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
@Injectable()
export class TaskService {
  constructor() {}

  @Cron('*/5 * * * * *')
  handleCron() {
    console.log('Called when the second is 5');
  }
}
