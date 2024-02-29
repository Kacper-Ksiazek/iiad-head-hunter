<script lang="ts">
    import {MetaTags} from 'svelte-meta-tags'
    import IdiotsList from "@/components/pages/landing/IdiotsList.svelte";
    import Input from "@/components/atoms/Input.svelte";

    let searchedPhrase: string = "";

</script>

<MetaTags
        title="IiAD 22/23 Head Hunter"
/>

<main class="p-10 bg-gray-50">

    <section id="main-content" class="max-w-4xl bg-white p-10 mx-auto">
        <h1 class="text-3xl text-amber-700 uppercase"><strong>IiAD</strong> HeadHunter 2022/2023</h1>
        <hr class="my-5">

        <Input bind:value={searchedPhrase} placeholder="Wyszukaj po imieniu albo numerze albumu"/>

        <IdiotsList bind:searchedPhrase/>

    </section>

</main>

<style lang="sass">
  main
    min-height: 100dvh
    max-width: calc(100vw - 20px)
</style>