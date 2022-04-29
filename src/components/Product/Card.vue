<template>
  <div class="container-card">
    <b-card class="mb-3">
      <div class="product-container">
        <div class="container-heart">
          <div class="heart-icon" :class="{ active: isFavorite }" @click="favorite()">
            <b-icon :icon="isFavorite ? 'heart-fill' : 'heart'"></b-icon>
          </div>
        </div>
        <div class="product-img">
          <b-img :src="product.image" :alt="product.title"></b-img>
        </div>
        <div style="width: 100%">
          <p class="product-name mt-3">{{ product.title }}</p>
          <div class="mt-3">
            <b-row>
              <b-col cols="6">
                <p class="title-price">Price</p>
                <p class="price">${{ product.price }}</p>
              </b-col>
              <b-col>
                <div class="align-flex-end">
                  <div class="plus-icon" @click="addBasket()" :class="{ active: inBasket }">
                    <b-icon :icon="inBasket ? 'check' : 'plus'"></b-icon>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Product from "@/models/Product";

@Component({})
export default class ProductCard extends Vue {
  @Prop() readonly product: Product | undefined;
  @Prop({ default: false }) readonly isFavorite: boolean | undefined;
  @Prop({ default: false }) readonly inBasket: boolean | undefined;

  favorite(): void {
    if (this.isFavorite) {
      this.$store.dispatch("products/unFavorite", this.product?.id);
    } else {
      this.$store.dispatch("products/favorite", this.product?.id);
    }
  }

  addBasket(): void {
    if (this.inBasket) {
      this.$store.dispatch("products/removeBasket", this.product);
    } else {
      this.$store.dispatch("products/addBasket", this.product);
    }
  }
}
</script>

<style lang="scss">
.product-img {
  height: 140px;
  display: grid;
  align-content: center;
  justify-content: center;

  img {
    width: 100px;
    height: auto;
  }
}
.card {
  border-radius: 1rem;
}
</style>
<style lang="scss">
p {
  margin: 0px;
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
      }

      .title-price {
        text-transform: uppercase;
        font-size: 12px;
      }

      .price {
        font-size: 12px;
        font-weight: bold;
      }

      .align-flex-end {
        justify-content: flex-end;
        display: flex;
        .plus-icon {
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
            color: white;
            background: #0080009e;
          }
        }
      }
    }
  }
}
</style>
