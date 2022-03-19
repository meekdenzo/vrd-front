<h1>VRD</h1>

<body>
	<div class="search-area">
		<input type="text" placeholder="Enter regex...">
		<button>Scan</button>
	</div>
	<div class="response-area">
		<p>This is where the response from server will be.</p>
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