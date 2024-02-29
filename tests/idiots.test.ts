import { IDIOTS } from "../src/assets/idiots";

test("getOneByName should return an idiot with a given name", () => {
    const me = IDIOTS.getOneByName("Kacper Książek");

    expect(me).not.toBeNull();
    expect(me).toHaveProperty("index", 417564);
    expect(me).toHaveProperty("name", "Kacper Książek");
})

test("getOneByIndex should return an idiot with a given index", () => {
    const me = IDIOTS.getOneByIndex(417564);

    expect(me).not.toBeNull();
    expect(me).toHaveProperty("index", 417564);
    expect(me).toHaveProperty("name", "Kacper Książek");
})

test("getBySearchingPhrase should return all idiots with a name containing the phrase", () => {
    const idiots = IDIOTS.getBySearchingPhrase("Kacper");

    expect(idiots).toHaveLength(1);
    expect(idiots[0]).toHaveProperty("index", 417564);
    expect(idiots[0]).toHaveProperty("name", "Kacper Książek");
});

test("getBySearchingPhrase should return all idiots with a name containing the phrase", () => {
    const idiots = IDIOTS.getBySearchingPhrase("");
    const allIdiots = IDIOTS.getAll();

    expect(idiots).toHaveLength(allIdiots.length);
})