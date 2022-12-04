import { IsBoolean } from 'class-validator';

import { CoreOutput } from '../../common/dtos/output.dto';
import { Log } from '../entities/log.entity';

export class CreateLogDto {
  @IsBoolean()
  isChargeOn: boolean;
}

export class CreateLogOutput extends CoreOutput {}
