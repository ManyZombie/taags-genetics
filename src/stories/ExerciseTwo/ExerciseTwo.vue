<template>
  <QBtn>Test</QBtn>
</template>

<script lang="ts" setup>
import unsorteredMenuData from "./Pathogenos";
import { computed } from "vue";

const menuData = computed(() => unsorteredMenuData.sort((a, b) => a.Id - b.Id));
</script>

<style scoped lang="scss">
.navigation-menu {
  background: rgb(0, 110, 255);
  border-radius: 0.2rem;
}

.navigation-items {
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 0.5rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
}

.navigation-item {
  a {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
  }
}
</style>
