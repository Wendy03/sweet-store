<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">香香餅舖</span>
      <button type="button" class="btn nav-link">
        購物車
        <span class="badge rounded-pill bg-danger text-white">{{
          cart.length
        }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import cartStore from "../stores/cartStore.js";
// const { mapState } = Pinia;
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cart"]),
  },
};
</script>
