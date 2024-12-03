import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { QueueName } from 'src/app.interface';

@Processor(QueueName.EMAIL)
export class EmailConsumber extends WorkerHost {
  counter = 0;
  async process(job: Job, token?: string): Promise<any> {
    try {
      this.counter++;
      const resolve = await this.sendMail(
        job.data.email,
        job.data.subject,
        job.data.message,
      );
      console.log(resolve);
    } catch (err) {
      console.log('error', err);
      throw new Error('error');
    }
    // return Promise.reject(job);
  }
  async sendMail(to: string, subject: string, message: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.counter < 3) {
          reject(
            `Send failed email to ${to} with subject ${subject} and message ${message}`,
          );
        } else {
          resolve(
            `Sent email to ${to} with subject ${subject} and message ${message}`,
          );
        }
      }, 3000);
    });
  }
}
