<script lang="ts">
    import {IDIOTS} from "@/assets/idiots";

    export let searchedPhrase: string;
    export let numberOfResults: number;

    $: data = IDIOTS.getBySearchingPhrase(searchedPhrase);
    $: numberOfResults = data.length;

</script>

<p class="mb-3">Ilość wyników: <strong>{numberOfResults}</strong></p>

{#each data as {index, name}}
    <div class="idiot">
        <strong>{index}</strong>
        <span>-</span>
        <span>{name}</span>
    </div>
{/each}