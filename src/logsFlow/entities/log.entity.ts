import { Column, Entity } from 'typeorm';
import { IsBoolean } from 'class-validator';

import { CoreEntity } from '../../common/entities/core.entity';

@Entity()
export class Log extends CoreEntity {
  @Column({ default: false })
  @IsBoolean()
  isChargeOn: boolean;

  @Column({ default: false })
  @IsBoolean()
  isUnknownStatus: boolean;
}
