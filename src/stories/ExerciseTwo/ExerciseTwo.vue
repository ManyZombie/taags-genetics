<template>
  <QTable
    title="Patógenos"
    :rows="pathogens"
    :columns="columns"
    row-key="name"
  />
</template>

<script lang="ts" setup>
import rawPathogens from "./Pathogens";
import { computed } from "vue";

const pathogens = computed(() =>
  rawPathogens.sort((a, b) => new Intl.Collator().compare(a.nombre, b.nombre))
);

const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left",
    field: "nombre",
    sortable: true,
  },
  {
    name: "calories",
    align: "left",
    label: "Descripcción",
    field: "descripción",
    format: (val: string) => val || "Sin descripcción",
    sortable: true,
  },
];
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
