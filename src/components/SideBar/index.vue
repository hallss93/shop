<template>
  <div>
    <b-sidebar id="sidebar-right" right shadow width="500px">
      <BasketList />
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasketList from "@/components/Basket/List.vue";

@Component({ components: { BasketList } })
export default class SideBar extends Vue {}
</script>
