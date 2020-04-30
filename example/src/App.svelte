<script>
	import { hotkey } from 'svelte-gh-hotkey'
	import Min from './Min.svelte';

	let inputKey = 't'
	let cnt = 0;
	let seq = [];
</script>

<Min />
<div>
	[press {inputKey}]<input type="text" use:hotkey={inputKey} bind:value={inputKey}>
</div>

{#each {length: 5} as _, i}
<button on:click={() => seq[i] = !seq[i]} class:active={seq[i]} use:hotkey={'g ' + String.fromCharCode(97 + i)}>
	g {String.fromCharCode(97 + i)}
</button>
{/each}

<style>
	.active {
		background-color: lime;
	}
</style>