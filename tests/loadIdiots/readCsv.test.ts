///<reference path="../../node_modules/@types/jest/index.d.ts"/>
import {readCsv, CsvFileNotFoundError} from "../../src/utils/loadIdiots/readCsv";
import path from 'path'

const filePath: string = path.join(__dirname, "../../src/assets/idiots.csv");

test("Read csv file and return array of arrays of strings", () => {
    const content = readCsv(filePath, ';')

    for (const [id, name] of content) {
        expect(id).toHaveLength(6)
        expect(name.split(" ")).toHaveLength(2)
    }
})

test("When file does not exist, throw error", () => {
    const filePath: string = path.join(__dirname, "../unknown4132213@523__32.csv");

    expect(() => readCsv(filePath)).toThrow(CsvFileNotFoundError);
});