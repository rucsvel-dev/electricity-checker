import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLogDto, CreateLogOutput } from './dtos/create-log.dto';
import { GetAllLogsOutput } from './dtos/get-all-logs.dto';
import { Log } from './entities/log.entity';

@Injectable()
export class LogsFlowService {
  constructor(
    @InjectRepository(Log) private readonly logsRepository: Repository<Log>,
  ) {}

  async getAllLogs(): Promise<GetAllLogsOutput> {
    try {
      const logs = await this.logsRepository.find();

      return { ok: true, logs };
    } catch (err) {
      return { ok: false, error: 'Logs not found' };
    }
  }

  async createLog(createLogDto: CreateLogDto): Promise<CreateLogOutput> {
    try {
      await this.logsRepository.save(this.logsRepository.create(createLogDto));

      return { ok: true };
    } catch (err) {
      return { ok: false, error: 'Cannot create the log' };
    }
  }
}
