<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import cartComponent from "./components/cartComponent.vue";
import ProductComponent from "./components/ProductComponent.vue";
export default {
  components: { NavbarComponent, cartComponent, ProductComponent },
};
</script>

<template>
  <div class="container">
    <NavbarComponent></NavbarComponent>
    <cartComponent></cartComponent>
    <ProductComponent></ProductComponent>
  </div>
  <!-- <RouterView /> -->
</template>

<style lang="scss">
@import "./assets/all.scss";
.card-img-top {
  object-fit: cover;
  height: 200px;
}
.table-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
}
</style>
