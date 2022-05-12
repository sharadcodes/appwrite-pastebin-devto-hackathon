<script>
  import { onMount } from "svelte";
  import { Badge, FormGroup, Input } from "sveltestrap";

  import { viewPaste } from "../api/paste";

  export let id;
  let title = "Loading...";
  let text = "Loading...";

  onMount(() => {
    viewPaste(id).then(
      function (response) {
        console.log(response); // Success
        title = response.title;
        text = response.txt;
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  });
</script>

<h3 class="display-6">Title: {title}</h3>
<Badge class="mb-2">paste id: {id}</Badge>
<section>
  Link for the paste: <pre>{location.href}</pre>
</section>
<FormGroup>
  <Input type="textarea" name="paste" id="paste" rows="20" disabled bind:value="{text}" />
</FormGroup>
