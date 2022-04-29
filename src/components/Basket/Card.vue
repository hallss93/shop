<template>
  <div class="container-card mb-0">
    <b-card class="mb-3">
      <b-row>
        <b-col class="m-0 p-0">
          <div class="product-img-basket">
            <b-img :src="product.image" :alt="product.title"></b-img>
          </div>
        </b-col>
        <b-col class="m-0 p-0" cols="8" sstyle>
          <p class="product-name align-left mt-3">{{ product.title }}</p>
          <b-col cols="6">
            <p class="price align-left font-weight-bold">${{ product.price }}</p>
          </b-col>
        </b-col>
        <b-col class="m-0 p-0" style="display: flex;align-items: center;">
          <div style="width: 100%">
            <div class="m-0">
              <div class="align-flex-end">
                <div class="x-icon" @click="remove()">
                  <b-icon icon="x"></b-icon>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Product from "@/models/Product";

@Component({})
export default class ProductCard extends Vue {
  @Prop() readonly product: Product | undefined;

  remove(): void {
    this.$store.dispatch("products/removeBasket", this.product);
  }
}
</script>

<style lang="scss">
.product-img-basket {
  height: 80px;
  display: grid;
  align-content: center;
  justify-content: center;

  img {
    width: 40px;
    height: auto;
  }
}
.card {
  border-radius: 1rem;
}
</style>
<style lang="scss">
.align-left {
  text-align: left;
}
p {
  margin: 0px;
}

.x-icon {
  width: 32px;
  height: 27px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #ccc;

  &:hover,
  &.active {
    background: #e8e6e6;
  }
}

.container-card {
  width: 100%;
  display: flex;
  padding: 0.5em;
  margin-bottom: 20px;
  .card {
    width: 100%;
    .product-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: left;

      .container-heart {
        display: flex;
        width: 100%;

        .heart-icon {
          width: 32px;
          height: 27px;
          display: flex;
          border-radius: 4px;
          align-items: center;
          justify-content: center;
          padding: 5px;
          cursor: pointer;

          &:hover,
          &.active {
            color: red;
            background: #ff000033;
          }
        }
      }

      .product-name {
        font-size: 14px;
        font-weight: 600;
        text-align: left;
      }

      .title-price {
        text-transform: uppercase;
        font-size: 12px;
        text-align: left;
      }

      .price {
        font-size: 12px;
        font-weight: bold;
        text-align: left;
      }

      .align-flex-end {
        justify-content: flex-end;
        display: flex;
      }
    }
  }
}
</style>
