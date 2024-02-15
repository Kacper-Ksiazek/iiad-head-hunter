import path from "path";
import {readCsv} from "./readCsv";
import {assets} from "@/utils/root_path";
import {organizeCsvRowsIntoStructure} from "./organizeCsvRowsIntoStructure";

const filePath = path.join(assets, 'idiots.csv')

export const IDIOTS: Map<string, string> = organizeCsvRowsIntoStructure(readCsv(filePath));
