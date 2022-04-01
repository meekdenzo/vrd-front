<script>
	import { onMount } from 'svelte';

	//variable declaration
	let _input
	let _response

	let submitEnd = ''
	let responseEnd = ''
	//regex input submission

	async function submitReg () {
		const res = await fetch(submitEnd, {
			method: 'POST',
			body: JSON.stringify({
				_input
			})
		})
		
		// const json = await res.json()
		// result = JSON.stringify(json)
	}	

	//server response handler
	onMount(async () => {
		const res = await fetch(responseEnd)
		const json = await res.json()
		_response = JSON.stringify(json)
	});
</script>


<h1>VRD</h1>

<body>
	<div class="search-area">
		<input type="text" placeholder="Enter regex..." bind:value={_input}/>
		<button type='button' on:click={submitReg}>
			Scan
		</button>
	</div>

	<div class="response-area">
		<p>This is where the response from server will be.</p>
		{_response}
	</div>
	<footer>A tool to test regex for DoS vulnerabilities.</footer>
</body>


<style>
	body{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	footer{
		margin-top: auto;
		text-align: center;
	}
	.search-area{
		border-bottom: 1px solid gray;
		padding-bottom: 10px;
	}
	.response-area{
		/* border-color: rgb(7, 7, 7); */
		/* border-style: solid; */
	}
</style>