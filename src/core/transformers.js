import lodash from 'lodash';
import { splitPathToFolders } from './path.js';

export const buildNameFromPath = (path) => splitPathToFolders(path).map(lodash.upperFirst).join('');
export const addNameSuffix = (suffix) => (name) => name + suffix;
