<template>
  <div class="home">
    <vue-loading :active="isLoading" :can-cancel="false" :is-full-page="true" />
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
export default class HomeView extends Vue {
  get isLoading(): boolean {
    return this.$store.getters["products/isLoading"];
  }
}
</script>
