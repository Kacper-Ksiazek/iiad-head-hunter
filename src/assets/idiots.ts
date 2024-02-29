type IdiotsData = Map<number, string>

interface Idiot {
    index: number;
    name: string;
}

interface IdiotsInterface {
    getAll: () => Idiot[] | null;
    getBySearchingPhrase: (phrase: string) => Idiot[];
    getOneByName: (name: Idiot['name']) => Idiot | null;
    getOneByIndex: (index: Idiot['index']) => Idiot | null;
}

const IDIOTS_DATA: Idiot[] = [
    {index: 411307, name: 'Anna Suska'},
    {index: 409936, name: 'Kamil Kminkowski'},
    {index: 416367, name: 'Magdalena Szczuka'},
    {index: 416582, name: 'Witold Tomczyk'},
    {index: 414805, name: 'Bartosz Krzysik'},
    {index: 414612, name: 'Karolina Zając'},
    {index: 410022, name: 'Zuzanna Chmielarska'},
    {index: 417094, name: 'Aleksandra Stefańska'},
    {index: 416026, name: 'Oliwia Wołos'},
    {index: 416119, name: 'Konrad Dąbrowski'},
    {index: 415208, name: 'Łucja Adamska'},
    {index: 411693, name: 'Stanisław Kosmala'},
    {index: 414792, name: 'Magdalena Sztok'},
    {index: 415331, name: 'Julia Walencik'},
    {index: 416432, name: 'Mikołaj Szuba'},
    {index: 414678, name: 'Bartosz Pietrucha'},
    {index: 414609, name: 'Szymon Skrzypczyk'},
    {index: 414714, name: 'Bartłomiej Piwowar'},
    {index: 414438, name: 'Julia Sanek'},
    {index: 414938, name: 'Martyna Stajniak'},
    {index: 416529, name: 'Gabriel Rączkowski'},
    {index: 416363, name: 'Wiktoria Stawowczyk'},
    {index: 415860, name: 'Weronika Sławacka'},
    {index: 417564, name: 'Kacper Książek'},
    {index: 417441, name: 'Aleksandra Jagiełło'},
    {index: 414460, name: 'Marcin Samojluk'},
    {index: 417459, name: 'Patrycja Makowska'},
    {index: 416114, name: 'Jakub Chłapek'},
    {index: 416293, name: 'Julita Skorzycka'},
    {index: 415120, name: 'Dominik Sakłaski'},
    {index: 415280, name: 'Dominika Pudlo'},
    {index: 412302, name: 'Dworak Jan'},
    {index: 409892, name: 'Karolina Murzyn'},
    {index: 411851, name: 'Król Natalia'},
    {index: 416314, name: 'Roksana Jandura'},
    {index: 415124, name: 'Katarzyna Wesołowska'},
    {index: 415241, name: 'Patryk Luty'},
    {index: 417416, name: 'Gerard Miętek'},
    {index: 415364, name: 'Szymon Piega'},
    {index: 415551, name: 'Eliza Muca'},
    {index: 407580, name: 'Wiktoria Wąs'},
    {index: 417356, name: 'Miłosz Pabis'},
    {index: 406814, name: 'Klaudia Stec'},
    {index: 415598, name: 'Michał Zaborek'},
    {index: 414309, name: 'Oliwier Kolbusz'},
    {index: 415787, name: 'Katarzyna Tokarczuk'},
    {index: 415950, name: 'Aleksandra Frączek'},
    {index: 417858, name: 'Magdalena Pogorzelec'},
    {index: 415696, name: 'Karolina Kokoszka'},
    {index: 417874, name: 'Joanna Olas'},
    {index: 406499, name: 'Maurycy Ebertowski'},
    {index: 415422, name: 'Kot Julia'},
    {index: 416457, name: 'Natalia Klinik'},
    {index: 414584, name: 'Jakub Milasz'},
    {index: 415490, name: 'Dawid Kraszkiewicz'},
    {index: 413254, name: 'Maria Kiraga'},
    {index: 412172, name: 'Weronika Jopek'},
    {index: 415748, name: 'Julia Janczyk'},
    {index: 414622, name: 'Konrad Gumoś'},
    {index: 415445, name: 'Aleksander Homa'},
    {index: 414731, name: 'Bartosz Irzyk'},
    {index: 415308, name: 'Maria Knapczyk'},
    {index: 416908, name: 'Filip Jabłoński'},
    {index: 415994, name: 'Mikołaj Grzesik'},
    {index: 417741, name: 'Jakub Gut'},
    {index: 414800, name: 'Karol Hołody'},
    {index: 416587, name: 'Bartłomiej Kózka'},
    {index: 417026, name: 'Tomasz Drozd'},
    {index: 415928, name: 'Kamil Derenda'},
    {index: 416674, name: 'Julia Filewicz'},
    {index: 415948, name: 'Gabriela Dudek'},
    {index: 417215, name: 'Zuzanna Gawlas'},
    {index: 417809, name: 'Patrycja Goluch'},
    {index: 415151, name: 'Adam Dracz'},
    {index: 414393, name: 'Maja Byrecka'},
    {index: 414961, name: 'Paulina Chlipała'},
    {index: 417225, name: 'Wiktor Chorzępa'},
    {index: 417147, name: 'Jakub Błazenek'}
];

class Idiots implements IdiotsInterface {
    private data: Idiot[] = IDIOTS_DATA;

    private idiotToString = (idiot: Idiot) => `${idiot.name.toLowerCase()} ${idiot.index}`;

    public getOneByName(searchedName: string): Idiot | null {
        return this.data.find(({name}) => name.toLowerCase() === searchedName.toLowerCase()) ?? null;
    }

    public getOneByIndex(searchedIndex: number): Idiot | null {
        return this.data.find(({index}) => index === searchedIndex) ?? null;
    }

    public getBySearchingPhrase(phrase: string): Idiot[] {
        if(phrase.length == 0) return this.data;


        return this.data.filter(row => this.idiotToString(row).includes(phrase.toLowerCase()));
    }

    public getAll(): Idiot[] {
        return this.data;
    }
}

export const IDIOTS = new Idiots();