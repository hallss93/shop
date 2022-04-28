<template>
  <div>
    <b-container>
      <h2 class="title">Produtos</h2>
      <div class="grid">
        <Card
          v-for="(product, index) in listProducts"
          :key="index"
          :product="product"
          :isFavorite="isFavorite(product)"
          :inCart="inCart(product)"
        />
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

  get favoriteProducts(): number[] {
    return this.$store.getters["products/favoriteProducts"];
  }

  get cart(): Product[] {
    return this.$store.getters["products/cart"];
  }

  listAllProducts() {
    this.$store.dispatch("products/listAllProducts");
  }

  created() {
    this.listAllProducts();
  }

  isFavorite(product: Product) {
    return this.favoriteProducts.find((item) => item === product.id) ? true : false;
  }

  inCart(product: Product) {
    return this.cart.find((item) => item.id === product.id) ? true : false;
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
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

@media only screen and (min-width: 576px) {
  .grid {
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
}

@media only screen and (min-width: 992px) {
  .grid {
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
}

@media only screen and (min-width: 1200px) {
  .grid {
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
}
</style>
