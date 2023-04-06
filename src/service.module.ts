import { Module } from '@nestjs/common';
import { NoticeService } from './notice/notice.service';

const services = [NoticeService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class ServiceModule {}
