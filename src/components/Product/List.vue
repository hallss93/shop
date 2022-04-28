<template>
  <div>
    <b-container>
      <h2 class="title">Produtos</h2>
      <b-row>
        <Card v-for="(product, index) in listProducts" :key="index" :product="product" />
      </b-row>
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
</style>
