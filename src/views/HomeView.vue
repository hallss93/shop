<template>
  <div class="home">
    <NavBar />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar/index.vue";
import ProductList from "@/components/Product/List.vue";
@Component({
  components: {
    NavBar,
    ProductList,
  },
})
export default class HomeView extends Vue {}
</script>
