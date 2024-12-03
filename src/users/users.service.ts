import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { QueueName } from './../app.interface';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UsersService {
  constructor(
    @InjectQueue(QueueName.EMAIL) private emailQueue: Queue,
    private eventEmitter: EventEmitter2,
  ) {}

  // async createUserWithQueue(body: any) {
  //   await this.emailQueue.add(
  //     'sendEmail',
  //     {
  //       email: body.email,
  //       subject: 'Chào bạn' + body.email,
  //       message: 'Cảm ơn bạn đã đăng ký tài khoản',
  //     },
  //     {
  //       delay: 3000, // Thời gian delay giữa các job
  //       attempts: 3, // Số lần thử nếu job failed
  //       backoff: {
  //         delay: 1000, // Thời gian chờ của mỗi lần chạy lại
  //         type: 'exponential',
  //       },
  //     },
  //   );
  //   // console.log(job);
  // }
  async createUser(body: any) {
    this.eventEmitter.emit('user.created', body);
  }

  @OnEvent('user.created')
  handleUserCreatedEvent(body: any) {
    console.log(body);
  }
}
