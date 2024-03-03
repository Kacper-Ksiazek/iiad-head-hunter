<script lang="ts">
    export let value: boolean;
    export let label: string;

    function onClick() {
        value = !value;
    }
</script>

<div class="switch-container">
    <button class="switch"
            on:click={onClick}
    >
        <span class="switch-knob {value ? 'active bg-amber-500' : 'bg-stone-400'}"></span>
    </button>
    {label}
</div>

<style lang="sass">
  .switch-container
    display: flex
    align-items: center

    button.switch
      position: relative
      display: flex
      justify-content: flex-start
      align-items: center
      padding: 14px
      width: 72px
      height: 36px
      border-radius: 24px
      margin-right: 8px
      background-color: rgba(0,0,0,.05)

      span.switch-knob
        position: absolute
        left: 0
        top: 50%
        height: 100%
        aspect-ratio: 1
        border-radius: 50%
        translate: 0 -50%
        transition: all .3s

        &.active
            left: 100%
            translate: -100% -50%






</style>

