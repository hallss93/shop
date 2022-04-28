<template>
  <div>
    <b-container>
      <h2 class="title">Produtos</h2>
      <div class="grid">
        <Card v-for="(product, index) in listProducts" :key="index" :product="product" />
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Product/Card.vue";
import Product from "@/models/Product";

@Component({
  components: { Card },
})
export default class ProductList extends Vue {
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

<style lang="scss">
.title {
  margin: 40px 0px;
  text-align: left;
  font-weight: bold;
}

.grid {
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}
</style>
