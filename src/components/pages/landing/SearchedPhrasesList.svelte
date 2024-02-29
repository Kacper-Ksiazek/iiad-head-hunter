<script lang="ts">
    import {searchedPhrasesStore} from "@/stores/searchedPhrasesStore";

</script>

<section id="searched-phrases-list">
    {#each $searchedPhrasesStore as phrase}
        <div class="row">
            <strong class="phrase">{phrase}</strong>
            <button on:click={()=>searchedPhrasesStore.remove(phrase)}>Skasuj</button>
        </div>
    {/each}
</section>

<style lang="sass">
  section#searched-phrases-list
    width: 100%
    div.row
      width: 100%
      height: 50px
      display: flex
      justify-content: space-between
      align-items: center


</style>