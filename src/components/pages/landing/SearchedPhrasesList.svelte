<script lang="ts">
    import {searchedPhrasesStore} from "@/stores/searchedPhrasesStore";
</script>


<section class="grid grid-cols-1 gap-2 mt-6">
    {#if $searchedPhrasesStore.size > 0}
        <p>Wyszukiwane frazy:</p>
        <ul class="grid grid-cols-1 gap-2">
            {#each $searchedPhrasesStore as searchedPhrase}
                <li class="flex items-center justify-between bg-gray-100 py-2 rounded px-4">
                    <span class="flex-grow">{ searchedPhrase.phrase}</span>
                    <span class="text-gray-500 w-1/4">{ searchedPhrase.numberOfResults} wyniki</span>
                    <button
                            on:click={() => searchedPhrasesStore.remove( searchedPhrase)}
                    >
                        <svg
                                class="w-4 h-4 text-red-500 hover:text-red-700 transition"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </li>
            {/each}
        </ul>
    {/if}
</section>
