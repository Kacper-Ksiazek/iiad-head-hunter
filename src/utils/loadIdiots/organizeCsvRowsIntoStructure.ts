export function organizeCsvRowsIntoStructure(rows: string[][]): Map<string,string> {
    const structure = new Map<string, string>();

    rows.forEach((row: string[]) => {
        if(row.length !==2 ) return;
        structure.set(row[0], row[1]);
    });

    return structure;
}