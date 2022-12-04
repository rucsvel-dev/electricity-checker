import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LogsFlowService } from './logsFlow.service';
import { LogsFlowController } from './logsFlow.controller';
import { Log } from './entities/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [LogsFlowController, LogsFlowService],
  exports: [LogsFlowService],
  controllers: [LogsFlowController],
})
export class LogsFlowModule {}
