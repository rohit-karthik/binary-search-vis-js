<script>
	import Bubble from "./components/Bubble.svelte";
	import { searchInstance } from "./logic/binarySearch";

	let maxVal;
	let seaFor;
	let errorMess;

	let searchRes = "Your result will show up after you search for a value!";
	let searchResCol = "black";
	let visited = [];

	function populate() {
		let myArray = [];
		for (let i = 1; i <= Number(maxVal); i++) {
			myArray.push(i);
		}
		return myArray;
	}

	function insertFirst() {
		visited = [];
		let useMargin =
			window.innerWidth / Math.round(maxVal / Math.round(maxVal / 2));
		visited.push([Math.round(maxVal / 2), `${useMargin * 0.85}px`, 1]);
		visited = visited;
	}

	function binarySearch(myArray) {
		let p1 = 0;
		let p2 = myArray.length - 1;
		let result = searchInstance(myArray, seaFor, p1, p2);

		let iteNum = 2;

		while (result[3] != 1 && result[1] <= result[2]) {
			let useMargin = window.innerWidth / (maxVal / result[0]);
			visited.push([result[0], `${useMargin * 0.85}px`, iteNum]);
			visited = visited;
			result = searchInstance(myArray, seaFor, result[1], result[2]);
			iteNum++;
		}

		if (result[3] != 1) {
			searchResCol = "red";
			searchRes = `${seaFor} NOT found.`;
		} else {
			searchResCol = "green"
			searchRes = `${seaFor} found!`;
		}
	}

	function search() {
		if (maxVal < 2 || maxVal > 512) {
			errorMess = "Please pick a maximum between 1 and 512.";
			searchResCol = "black";
			searchRes = "Your result will show up after you search for a value!";
			return;
		}

		if (seaFor == null) {
			errorMess = "Type in a proper value to search for.";
			searchResCol = "black";
			searchRes = "Your result will show up after you search for a value!";
			return;
		}

		errorMess = null;

		let myArray = populate();
		insertFirst();
		binarySearch(myArray);
	}
</script>

<h1>Binary Search Visualizer</h1>

{#if errorMess != null}
	<p style="color: red">{errorMess}</p>
{/if}

<input
	class="maxInput"
	placeholder="Type in a Max Value (max included in array)"
	bind:value={maxVal}
	type="number"
/>
<input
	class="searchInput"
	placeholder="Search For"
	bind:value={seaFor}
	type="number"
/>

<button on:click={search}>Search</button>

<p style="font-size: large; color: {searchResCol}">{searchRes}</p>

<div class="content">
	{#each visited as node}
		<Bubble toUse={node[0]} myMargin={node[1]} iteNum={node[2]} />
	{/each}
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}
	button {
		height: 3rem;
		width: 5rem;
		background-color: green;
		color: white;
		border-radius: 0.5rem;
		border: none;
	}
	.maxInput {
		width: 22rem;
		height: 3rem;
	}
	.searchInput {
		width: 7rem;
		height: 3rem;
	}
</style>
