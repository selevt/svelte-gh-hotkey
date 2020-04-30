<script>
  import { hotkey } from "svelte-gh-hotkey";
  let count = 0;
</script>

<button on:click={() => count++} use:hotkey={'i'}>
    Press i to increment
</button>
{count}
