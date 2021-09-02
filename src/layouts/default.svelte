<script>  
  // import {routes} from '../metadata'
  
  export let title
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<nav>
  <ul>
    <!-- {#each routes as route}
      <li>
        <a href={route.path}>{route.label}</a>
      </li>
    {/each} -->
  </ul>
</nav>

<slot />