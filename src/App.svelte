<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags'
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import {readCsv} from "@/utils/readCsv";

  const data = readCsv{index: n}("../data/iiad.csv");

</script>

<MetaTags
  title="IiAD 22/23 Head Hunter"
/>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <h1>Test</h1>
</main>

