<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white" style="justify-content: space-between">
      <div class="container-icon">
        <img alt="Casas Bahia" class="icon-img" src="@/assets/casas-bahia.png" />
        <div class="store-text">
          <p class="store-name">Casas Bahia</p>
          <p class="store-description">Loja Online</p>
        </div>
      </div>
      <div>
        <b-button variant="outline" v-b-toggle.sidebar-right>
          <span class="font-weight-bold"> $ {{ basketSum }} </span>
          <b-icon icon="cart"></b-icon>
        </b-button>
      </div>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NavBar extends Vue {
  get basketSum(): number {
    return this.$store.getters["products/basketSum"];
  }
}
</script>

<style lang="scss">
p {
  margin: 0px;
}
.navbar {
  padding: 30px 0px;
  box-shadow: 5px 3px 5px #ccc;
}
.container-icon {
  padding-left: 20px;
  display: flex;
  align-items: center;

  .icon-img {
    width: auto;
    height: 50px;
  }

  .store-text {
    text-align: start;
    padding-left: 10px;

    .store-name {
      font-weight: bold;
      font-size: 16px;
    }

    .store-description {
      font-size: 14px;
    }
  }
}
</style>
