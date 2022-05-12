<script>
  import { Button } from "sveltestrap";
  import { navigate } from "svelte-routing";
</script>

<p>Hi! Folks, this app was developed using appwrite project in just a few hours.</p>
<Button
  on:click="{() => {
    navigate('/paste');
  }}"
  class="btn-lg btn-info">Create a paste!</Button
>
