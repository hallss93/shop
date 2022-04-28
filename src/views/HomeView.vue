<template>
  <div class="home">
    <NavBar />
    <ProductList />
    <SideBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar/index.vue";
import SideBar from "@/components/SideBar/index.vue";
import ProductList from "@/components/Product/List.vue";
@Component({
  components: {
    NavBar,
    ProductList,
    SideBar,
  },
})
export default class HomeView extends Vue {}
</script>
