<script lang="ts">
    import {IDIOTS} from "@/assets/idiots";

    export let searchedPhrase: string;

    $: data = IDIOTS.getBySearchingPhrase(searchedPhrase);

</script>

<p class="mb-3">Ilość wyników: <strong>{data.length}</strong></p>

{#each data as {index, name}}
    <div class="idiot">
        <strong>{index}</strong>
        <span>-</span>
        <span>{name}</span>
    </div>
{/each}