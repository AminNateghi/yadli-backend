import * as fs from 'fs';
import { envConfigService } from '../env.config';

fs.writeFileSync('ormconfig.json',
  JSON.stringify(envConfigService.getDatabaseConnectionConfig(), null, 2)
);