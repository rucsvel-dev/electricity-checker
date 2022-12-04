import { IsBoolean } from 'class-validator';

import { CoreOutput } from '../../common/dtos/output.dto';

export class CreateLogDto {
  @IsBoolean()
  isChargeOn: boolean;
}

export class CreateLogOutput extends CoreOutput {}
