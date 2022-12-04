import { IsNotEmpty, IsNumber } from 'class-validator';

import { CoreOutput } from '../../common/dtos/output.dto';
import { Log } from '../entities/log.entity';

export class GetAllLogsOutput extends CoreOutput {
  logs?: Log[];
}
