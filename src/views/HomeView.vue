<template>
  <div class="home">
    <NavBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar/index.vue";
import Product from "@/models/Product";
@Component({
  components: {
    NavBar,
  },
})
export default class HomeView extends Vue {
  get listProducts(): Product[] {
    return this.$store.getters["products/listProducts"];
  }

  listAllProducts() {
    this.$store.dispatch("products/listAllProducts");
  }

  created() {
    this.listAllProducts();
  }
}
</script>
