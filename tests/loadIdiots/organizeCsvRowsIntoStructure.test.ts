import {organizeCsvRowsIntoStructure} from '../../src/utils/loadIdiots/organizeCsvRowsIntoStructure'


test("Proper csv rows are organized into structure", () => {
    const rows = [
        ["first", "1"],
        ["second", "2"],
        ["third", "3"],
    ];

    const structure = organizeCsvRowsIntoStructure(rows);

    expect(structure.get("first")).toBe("1");
    expect(structure.get("second")).toBe("2");
    expect(structure.get("third")).toBe("3");
});

test("Rows with lenght diffrerent than 2 are not included in structure", () => {
    const rows = [
        ["first", "1"],
        ["second" ,"2", "10", "false"],
        ["third", "3"],
        ["fourth"],
        ["fifth", "5"],
    ];

    const structure = organizeCsvRowsIntoStructure(rows);

    expect(structure.keys()).not.toContain(["fourth","second"]);
});