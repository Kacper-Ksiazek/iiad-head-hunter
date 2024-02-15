import fse from 'fs-extra'
import {formatSingleLine} from './formatSingleLine'

export class CsvFileNotFoundError extends Error {
    constructor(filePath: string) {
        super(`csv file not found: ${filePath}`);
    }
}

export function readCsv(filePath: string, separator = ','): string[][] {
    if (fse.existsSync(filePath) == false) throw new CsvFileNotFoundError(filePath);

    const content = fse.readFileSync(filePath, 'utf-8').split('\n');

    return content.map((line: string) => formatSingleLine(line, ';')). //
        filter(line=>line.join('').length > 0);
}