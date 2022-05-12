<script>
  import { Button } from "sveltestrap";
  import { navigate } from "svelte-routing";
</script>

<img src="/hero.png" alt="" srcset="" style="height: 25vw;" />
<p>Hi! Folks, this app was developed using appwrite project in just a few hours.</p>
<p>It uses Anonymous login to save the pastes created by the user.</p>
<pre>PS: It's a pastebin clone</pre>
<Button
  on:click="{() => {
    navigate('/paste');
  }}"
  class="btn-lg btn-info">Create a paste!</Button
>
