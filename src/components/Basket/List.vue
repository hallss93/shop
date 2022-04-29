<template>
  <div>
    <b-container class="px-4">
      <h2 class="title">Basket</h2>
      <b-row>
        <h6 v-if="basket.length === 0">No products added to basket</h6>
        <Card v-for="(product, index) in basket" :key="index" :product="product" />
      </b-row>
      <b-row>
        <ul class="indice">
          <li>
            <span>Total:</span> <span>${{ basketSum }}</span>
          </li>
          <li>
            <span>Tax 5%:</span> <span>${{ tax }}</span>
          </li>
        </ul>
      </b-row>
      <b-row>
        <b-button variant="success" @click="checkout()">Checkout</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Basket/Card.vue";
import Product from "@/models/Product";

@Component({
  components: { Card },
})
export default class BasketList extends Vue {
  [x: string]: any;
  get basket(): Product[] {
    return this.$store.getters["products/basket"];
  }

  get basketSum(): number {
    return this.$store.getters["products/basketSum"];
  }

  get tax(): number {
    return Number((this.basketSum / (100 / 5)).toFixed(2));
  }

  checkout(): void {
    this.$swal("Purchase made successfully!");
    this.$emit("hide");
  }
}
</script>

<style lang="scss">
ul.indice {
  list-style-type: none;
  text-align: left;
  li {
    margin-top: 5px;
    text-align: left;
    position: relative;
    span {
      font-weight: bold;
    }
    span + span {
      float: right;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      top: 50%;
      width: 100%;
      border-bottom: 1px dashed #ccc;
    }
  }
}
</style>
