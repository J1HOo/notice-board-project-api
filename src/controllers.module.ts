import { Module } from '@nestjs/common';
import { NoticeController } from './notice/notice.controller';
import { ServiceModule } from './service.module';

@Module({
  imports: [ServiceModule],
  controllers: [NoticeController],
})
export class ControllersModule {}
