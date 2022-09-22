<template>
  <form @submit.prevent.stop="submit">
    <QCard class="q-ma-md q-pa-md">
      <QCard v-if="documentInputs.length === 0" class="q-my-md" flat bordered>
        <QCardSection color="text-grey"> Sin documentos </QCardSection>
      </QCard>
      <input
        v-for="(_, index) in documentInputs"
        ref="documentInputsRefs"
        :key="index"
        class="q-my-lg block"
        outlined
        type="file"
      />
      <QCardActions align="right">
        <QBtn color="primary" class="q-my-md" outline @click="addNewDocument"
          >Agregar documento</QBtn
        >
      </QCardActions>

      <QCardActions align="right">
        <QBtn color="primary" type="submit">Finalizar</QBtn>
        <QBtn color="primary" type="reset" flat>Reiniciar</QBtn>
      </QCardActions>
    </QCard>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Emits {
  (event: "submit", params: File[]): void;
}

const emit = defineEmits<Emits>();

const documentInputsRefs = ref<HTMLInputElement[]>([]);

const documentInputs = ref<null[]>([]);

function addNewDocument() {
  documentInputs.value.push(null);
}

function submit() {
  const posibleDocuments = documentInputsRefs.value.map(
    (value) => value.files?.[0] ?? null
  );
  const documents = posibleDocuments.filter((value) => !!value) as File[];
  emit("submit", documents);
}
</script>

<style scoped lang="scss"></style>
