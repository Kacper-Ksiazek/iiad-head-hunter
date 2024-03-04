import {writable} from 'svelte/store'

export interface SearchedPhrase {
    phrase: string;
    numberOfResults: number;
}

function createSearchedPhraseStore() {
    const {set, update, subscribe} = writable<Set<SearchedPhrase>>(new Set<SearchedPhrase>())

    return {
        subscribe,
        add: (phrase: SearchedPhrase) => update(currentSet => new Set<SearchedPhrase>([...currentSet, phrase])),
        remove: (valueToRemove: SearchedPhrase) => update((currentSet) => {
            const newSet = new Set<SearchedPhrase>(currentSet);
            newSet.delete(valueToRemove);
            return newSet;
        }),
        reset: () => update(() => new Set<SearchedPhrase>()),
    }

}

export const searchedPhrasesStore = createSearchedPhraseStore();
