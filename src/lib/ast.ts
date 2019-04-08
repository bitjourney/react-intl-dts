import { readFileSync } from 'fs';
import { join } from 'path';
import { Translation } from '../interfaces';

export const dts = (keys: Translation[]): string => {
  const disableCommentsForLint =
    '/* eslint-disable */\n/* tslint:disable */\n\n\n';

  const declareType =
    'type MessageKey =\n' +
    keys.map(key => `  | "${key.key}"`).join('\n') +
    ';\n\n';
  const origPath = join(__dirname, '../../assets/react-intl.d.ts');
  const orig = readFileSync(origPath, { encoding: 'utf-8' });

  return (
    disableCommentsForLint +
    declareType +
    orig.replace(/^\s*id: string;/m, '            id: MessageKey;')
  );
};
