<template>
  <b-col>
    <b-card title="Card title" sub-title="Card subtitle">
      <b-img :src="product.image" class="product-img" :alt="product.title"></b-img>
    </b-card>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Product from "@/models/Product";

@Component({})
export default class ProductCard extends Vue {
  @Prop() readonly product: Product | undefined;
}
</script>

<style lang="scss">
.product-img {
  width: 100px;
}
.card {
  border-radius: 1rem;
}
</style>
