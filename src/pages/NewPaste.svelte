<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { Button, FormGroup, Input } from "sveltestrap";

  import { createAnonSession, createPaste } from "../api/paste";

  let saving = false;
  let saved = false;

  let title;
  let text;

  onMount(() => {
    createAnonSession();
  });

  const savePaste = () => {
    if (title?.length === 0 || text.length === 0) {
    } else {
      saving = true;
      createPaste(title, text).then(
        function (response) {
          console.log(response); // Success
          saved = true;
          navigate(`/paste/${response["$id"]}`);
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }
  };
</script>

<FormGroup>
  <Input class="mb-2" type="text" name="title" id="title" placeholder="Your paste title" bind:value="{title}" />
  <Input type="textarea" name="paste" id="paste" rows="20" placeholder="Your text here..." bind:value="{text}" />
  {#if !saving}
    <!-- content here -->
    <Button class="btn-info btn-lg mt-2" on:click="{savePaste}">Save</Button>
  {:else if saving && !saved}
    <Button class="btn-warning btn-lg mt-2">
      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Saving...
    </Button>
    <!-- else content here -->
  {:else}
    <Button class="btn-success btn-lg mt-2" disabled>Saved</Button>
  {/if}
</FormGroup>
