import path from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line import/no-extraneous-dependencies
import { makeTemplate } from 'nameless-npm-package';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
makeTemplate(dirname);
