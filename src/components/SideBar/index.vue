<template>
  <div>
    <b-sidebar id="sidebar-right" ref="sidebar-right" right shadow width="500px">
      <BasketList @hide="hide" />
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasketList from "@/components/Basket/List.vue";

@Component({ components: { BasketList } })
export default class SideBar extends Vue {
  hide() {
    this.$store.dispatch("products/clearBasket");
    (this.$refs["sidebar-right"] as any)?.hide();
  }
}
</script>
