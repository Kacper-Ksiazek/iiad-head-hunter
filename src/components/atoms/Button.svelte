<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    import type {TailwindColor} from "@/types/tailwind";

    const dispatch = createEventDispatcher();

    export let disabled: boolean = false;
    export let label: string = '';
    export let variant: TailwindColor = 'gray';

</script>

<button
        on:click={() => dispatch('click')}
        disabled={disabled}
        class="bg-{variant}-500 px-3 py-2 rounded text-white hover:bg-{variant}-600 transition duration-300
        ease-in-out disabled:bg-stone-300 disabled:text-white">
    {label}
    <slot></slot>
</button>