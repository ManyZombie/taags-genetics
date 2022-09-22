<template>
  <QCard class="q-pa-md">
    <QForm @submit="submit">
      <QInput
        v-model="email"
        label="Email"
        :rules="emailRules"
        outlined
        class="q-mb-md"
      />
      <QInput
        v-model="phone"
        :rules="phoneRules"
        class="q-mb-md"
        label="Teléfono"
        mask="(###) ### - ####"
        outlined
      />
      <QCardActions align="right">
        <QBtn color="primary" type="submit">Finalizar</QBtn>
        <QBtn color="primary" type="reset" flat>Reiniciar</QBtn>
      </QCardActions>
    </QForm>
  </QCard>

  <QCard class="q-pa-md q-my-md">
    <p v-text="message"></p>
    <QForm @submit="submitComment">
      <QInput
        v-model="comment"
        counter
        maxlength="200"
        class="q-my-md"
        label="Comentarios"
        type="textarea"
        outlined
        :rules="commentRules"
      />
      <QCardActions align="right">
        <QBtn color="primary" type="submit">Comentar</QBtn>
        <QBtn color="primary" type="reset" flat>Reiniciar</QBtn>
      </QCardActions>
    </QForm>
  </QCard>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Emits {
  (event: "submit", params: { email: string; phone: string }): void;
  (event: "submitComment", params: { comment: string }): void;
}

const emit = defineEmits<Emits>();

const email = ref("");
const emailRules = ref([
  (val: string) => isEmpty(val) || "El email es requerido",
  (val: string) => isValidEmail(val) || "El email es inválido",
]);

const phone = ref("");
const phoneRules = ref([
  (val: string) => isEmpty(val) || "El teléfono es requerido",
  (val: string) => isValidPhone(val) || "El teléfono es inválido",
]);

function isEmpty(val: string) {
  return val !== null && val !== "";
}

function isValidEmail(value: string) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value.match(regex);
}

function isValidPhone(value: string) {
  return value.length === 16;
}

function submit() {
  emit("submit", { email: email.value, phone: phone.value });
}

//---- Comments logic ----

const message = ref("Texto inicial");

const comment = ref("");
const commentRules = ref([
  (val: string) => isEmpty(val) || "El comentario es requerido",
  (val: string) => isValidComment(val) || "El debe ser menor de 200 caracteres",
]);

function isValidComment(value: string) {
  return value.length < 200;
}

function submitComment() {
  message.value = comment.value;
  emit("submitComment", { comment: comment.value });
  comment.value = "";
}
</script>
