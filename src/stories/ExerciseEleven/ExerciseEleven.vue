<template>
  <QCard class="q-py-md flex justify-around" flat>
    <QSelect
      v-model="category"
      class="v-categories-select"
      clearable
      :options="categories"
      label="Filtros"
      outlined
      dense
    />
    <QBtn
      dense
      color="purple"
      padding="xs md"
      class="q-ml-md"
      @click="dialog = true"
    >
      <div>Ver carrito</div>
      <QBadge color="red" floating>{{ cart.length }}</QBadge>
    </QBtn>
  </QCard>

  <QCard class="q-pa-md row" flat>
    <QCard
      class="col-12 col-md-3 v-card-product"
      v-for="product in products"
      :key="product.id"
      flat
    >
      <QCardSection class="q-pb-sm">
        <div class="text-subtitle1">{{ product.nombre_producto }}</div>
        <div class="text-body2">
          ${{ product.precio }}.00 - {{ product.categoria }}
        </div>
      </QCardSection>

      <QCardSection class="q-pt-none text-grey-7">
        {{ product.descripcion }}
      </QCardSection>

      <QCardActions align="right">
        <QBtn flat @click="store.commit('addToCart', { product, quantity: 1 })"
          >Agregar al carrito</QBtn
        >
      </QCardActions>
    </QCard>
  </QCard>

  <QDialog v-model="dialog" maximized>
    <QCard>
      <QToolbar class="bg-grey-3">
        <q-toolbar-title>Carrito de compras</q-toolbar-title>
        <QSpace />

        <QBtn dense flat icon="close" v-close-popup> </QBtn>
      </QToolbar>

      <QCardSection>
        <q-markup-table flat bordered wrap-cells>
          <thead>
            <tr>
              <th class="text-left">Borrar</th>
              <th class="text-left">Nombre</th>
              <th class="text-left">Cantidad</th>
              <th class="text-left">Descripcción</th>
              <th class="text-right">Precio</th>
              <th class="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cartItem, index) in cart" :key="cartItem.id">
              <td>
                <QBtn
                  icon="delete"
                  outline
                  padding="sm"
                  color="red-5"
                  @click="store.commit('removeFromCart', index)"
                ></QBtn>
              </td>
              <td class="text-left">{{ cartItem.nombre_producto }}</td>
              <td style="width: 200px">
                <div class="flex items-center">
                  <QBtn outline @click="store.commit('subtractQuantity', index)"
                    >-</QBtn
                  >
                  <div class="q-pa-md">
                    {{ cartItem.cantidad }}
                  </div>
                  <QBtn outline @click="store.commit('addQuantity', index)"
                    >+</QBtn
                  >
                </div>
              </td>
              <td class="text-left">{{ cartItem.descripcion }}</td>
              <td class="text-right">${{ cartItem.precio }}.00</td>
              <td class="text-right">
                ${{ productTotal(cartItem.precio, cartItem.cantidad) }}.00
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right">Total</td>
              <td class="text-right">${{ store.getters.total }}.00</td>
            </tr>
          </tbody>
        </q-markup-table>
      </QCardSection>
      <QCardActions align="right">
        <QBtn :loading="loading" @click="buy">Comprar</QBtn>
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { CartItem } from "../../types/CartItem";
import type { Product } from "../../types/Product";

import { useStore } from "vuex";

const store = useStore();

const rawProducts = computed(() => store.state.products as Product[]);

const cart = computed(() => store.state.cart as CartItem[]);

const category = ref(null);

const categories = ["PCR", "SAMPLING", "SOFTWARE", "SERVICES"];

const products = computed(() => {
  if (!category.value) return rawProducts.value;
  return rawProducts.value.filter(
    (value) => value.categoria === category.value
  );
});

function productTotal(price: string, quantity: number) {
  return Number.parseFloat(price) * quantity;
}

store.dispatch("getProducts");

const dialog = ref(false);

const loading = ref(false);

async function buy() {
  loading.value = true;
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
  loading.value = false;
}
</script>

<style scoped lang="scss">
.v-card-product {
  border: 1px solid hsla(0, 0%, 0%, 0.212);
  border-radius: 1.5rem;
}

.v-categories-select {
  min-width: 200px;
}
</style>
