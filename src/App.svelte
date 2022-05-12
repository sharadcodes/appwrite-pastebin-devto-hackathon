<script>
  import { Router, Link, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Home from "./pages/Home.svelte";
  import NewPaste from "./pages/NewPaste.svelte";
  import ViewPaste from "./pages/ViewPaste.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <Nav />
  <main class="container pt-4 pb-4">
    <Route path="/"><Home /></Route>
    <Route path="/paste" component="{NewPaste}" />
    <Route path="/paste/:id" component="{ViewPaste}" />
  </main>
</Router>
