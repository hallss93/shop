<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <div class="container-icon">
        <img alt="Casas Bahia" class="icon-img" src="@/assets/casas-bahia.png" />
        <div class="store-text">
          <p class="store-name">Casas Bahia</p>
          <p class="store-description">Loja Online</p>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NavBar extends Vue {}
</script>

<style lang="scss">
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
