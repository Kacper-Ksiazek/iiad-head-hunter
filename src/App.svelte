<script lang="ts">
    // Images
    import aghLogo from "@/assets/images/Logotyp-AGH.png";
    // Tools
    import {searchedPhrasesStore} from '@/stores/searchedPhrasesStore'
    // Components
    import {MetaTags} from 'svelte-meta-tags'
    import Input from "@/components/atoms/Input.svelte";
    import Switch from "@/components/atoms/Switch.svelte";
    import IdiotsList from "@/components/pages/landing/IdiotsList.svelte";
    import SearchedPhrasesList from '@/components/pages/landing/SearchedPhrasesList.svelte'
    import Button from "@/components/atoms/Button.svelte";

    let searchedPhrase: string = "";
    let displayOnlyWithSearchingPhrases: boolean = false;
    let numberOfResults: number = 0;

    $: disableAddNewPhraseButton = searchedPhrase.length < 3 || displayOnlyWithSearchingPhrases

    function onEnterClickWhileOnInput() {
        if (disableAddNewPhraseButton) return

        searchedPhrasesStore.add({phrase: searchedPhrase, numberOfResults})
        searchedPhrase = ''
    }

    function handleReset() {
        searchedPhrasesStore.reset()
        displayOnlyWithSearchingPhrases = false
    }

</script>

<MetaTags
        title="IiAD 22/23 Head Hunter"
/>

<main class="p-10 bg-gray-50">

    <section id="main-content" class="max-w-5xl bg-white p-8 mx-auto grid grid-cols-2 gap-8">

        <header class="col-span-2 flex items-center justify-between">
            <span>
                <h1 class="text-3xl text-amber-700 uppercase"><strong>IiAD</strong> HeadHunter 2022/2023</h1>
                <p class="text-1xl text-stone-700 mt-1">Wścibstwo nade wszystko</p>
            </span>
            <img src={aghLogo} alt="agh logo" class="w-12 mx-12">
        </header>

        <hr class="mt-5 col-span-2">

        <div>
            <div class="flex gap-1 w-full mb-1">
                <Input bind:value={searchedPhrase}
                       placeholder="Wyszukaj po imieniu albo numerze albumu"
                       on:pressingEnter={onEnterClickWhileOnInput}
                />

                <Button
                        label="Szukaj"
                        on:click={onEnterClickWhileOnInput}
                        disabled={disableAddNewPhraseButton}
                        variant="amber"
                />
            </div>

            <IdiotsList
                    bind:searchedPhrase
                    bind:numberOfResults
                    bind:displayOnlyWithSearchingPhrases
            />
        </div>

        <div class="pt-1">
            <h2 class="text-2xl text-amber-700 mb-4">Lista idiotów</h2>

            <div class="flex justify-between items-center">
                <Switch label="Użyj wszystkich zapisanych fraz" bind:value={ displayOnlyWithSearchingPhrases}/>
                <Button
                        on:click={handleReset}
                        disabled={$searchedPhrasesStore.size === 0}
                        label="Wyczysc"
                        variant="red"
                />
            </div>

            <SearchedPhrasesList/>
        </div>

    </section>

</main>

<style lang="sass">
  main
    min-height: 100dvh
    max-width: calc(100vw - 20px)
</style>