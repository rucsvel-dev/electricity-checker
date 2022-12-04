import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { CreateLogDto, CreateLogOutput } from './dtos/create-log.dto';
import { GetAllLogsOutput } from './dtos/get-all-logs.dto';
import { LogsFlowService } from './logsFlow.service';

@Controller('logsFlow')
export class LogsFlowController {
  constructor(private readonly logsFlowService: LogsFlowService) {}

  @Get()
  getAllLogs(): Promise<GetAllLogsOutput> {
    return this.logsFlowService.getAllLogs();
  }

  @Post('createLog')
  createUserByEmail(
    @Body() createLogDto: CreateLogDto,
  ): Promise<CreateLogOutput> {
    return this.logsFlowService.createLog(createLogDto);
  }
}
