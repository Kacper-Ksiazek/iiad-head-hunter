export function formatSingleLine(line: string, separator: string = ','): string[] {
    return line.trim(). //
        replaceAll(/[',]/g, ''). //
        replaceAll(/\r /g, ''). //
        split(separator);
}