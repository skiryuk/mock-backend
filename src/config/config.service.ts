import { Injectable } from '@nestjs/common';
import { Config } from './config.models';
import * as DEFAULT_CONFIG from './data/config.json';

@Injectable()
export class ConfigService {
  public config: Config;

  constructor() {
    this._init();
  }

  private _init(): void {
    this.config = DEFAULT_CONFIG as Config;
  }
}
