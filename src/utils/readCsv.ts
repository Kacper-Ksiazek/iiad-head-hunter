import fse from 'fs-extra'

export function readCsv(filePath: string, separator=','): string[] {
    if (fse.existsSync(filePath) == false) throw new Error('File not found');

    const content = fse.readFileSync(filePath, 'utf-8');

    return [];
}