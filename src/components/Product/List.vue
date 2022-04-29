<template>
  <div>
    <b-container>
      <b-row class="mt-4 mb-4" align-v="center">
        <b-col>
          <h2 class="title">Produtos</h2>
        </b-col>
        <b-col>
          <b-form-input v-model="text" placeholder="Search Products"></b-form-input>
        </b-col>
      </b-row>
      <h6 v-if="filteredProducts.length === 0">No products found</h6>
      <div class="grid">
        <Card
          v-for="(product, index) in filteredProducts"
          :key="index"
          :product="product"
          :isFavorite="isFavorite(product)"
          :inBasket="inBasket(product)"
        />
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Card from "@/components/Product/Card.vue";
import Product from "@/models/Product";

@Component({
  components: { Card },
})
export default class ProductList extends Vue {
  text = "";
  filteredProducts: Product[] = [];

  @Watch("listProducts")
  onChangeListProducts(list: Product[]) {
    this.filteredProducts = list;
  }

  @Watch("text")
  onChangeText(text: string) {
    this.filteredProducts = this.listProducts.filter(
      (item) => item.title.toUpperCase().indexOf(text.toUpperCase()) >= 0
    );
  }

  get listProducts(): Product[] {
    return this.$store.getters["products/listProducts"];
  }

  get favoriteProducts(): number[] {
    return this.$store.getters["products/favoriteProducts"];
  }

  get basket(): Product[] {
    return this.$store.getters["products/basket"];
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

  inBasket(product: Product) {
    return this.basket.find((item) => item.id === product.id) ? true : false;
  }
}
</script>

<style lang="scss">
.title {
  margin: 0px;
  padding: 0px;
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
