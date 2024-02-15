import {formatSingleLine} from "../../src/utils/loadIdiots/formatSingleLine";

test("All punctuation should be removed", () => {
    const input: string = "      '313131;John Doe\r' ,"
    const output: string[] = ["313131", "John Doe"]

    expect(formatSingleLine(input, ';')).toEqual(output);
});