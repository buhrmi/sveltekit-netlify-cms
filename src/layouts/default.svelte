<script>
	import { getRoutes } from "../metadata";

	const routes = getRoutes();

	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<nav>
	<ul>
		{#each routes as route}
			<li>
				<a href={route.path}>{route.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<slot />
