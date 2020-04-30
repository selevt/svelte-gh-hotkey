# svelte-gh-hotkey

Simple Svelte action wrapping [@github/hotkey](https://github.com/github/hotkey) taking care of the lifecycle.

Usage: `use:hotkey={'j'}` - which results in `data-hotkey="j"`.

## Example

```html
<script>
  import { hotkey } from "svelte-gh-hotkey";
  let count = 0;
</script>

<button on:click={() => count++} use:hotkey={'i'}>
    Press i to increment
</button>
{count}
```

## Run example

```bash
cd example
npm run dev
```

## License

Distributed under the MIT license. See LICENSE for details.
