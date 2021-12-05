import * as fs from 'fs';
import { envConfigService } from '../services/config.service';

fs.writeFileSync('ormconfig.json',
  JSON.stringify(envConfigService.getDatabaseConnectionConfig(), null, 2)
);