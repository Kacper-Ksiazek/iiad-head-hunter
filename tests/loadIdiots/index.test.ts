import { IDIOTS } from "../../src/utils/loadIdiots";

test("I should be able to find myself in the idiots.csv file", () => {
    const me = {
        name: "Kacper Książek",
        id: "417564"
    }

    expect(IDIOTS.get(me.id)).toBe(me.name);
});
