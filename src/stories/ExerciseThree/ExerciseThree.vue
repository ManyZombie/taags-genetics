<template>
  <div class="bg-white flex items-end q-pa-md justify-end">
    <QSelect v-model="locale" :options="languages" outlined dense />
  </div>
  <div class="v-container">
    <QCard class="v-info-card">
      <div class="text-h4 v-info-card--title">
        {{ t("contact.slogan") }}
      </div>
      <div class="text-h6 text-weight-regular">{{ t("contact.message") }}</div>
    </QCard>
    <div class="v-contact-section">
      <div class="text-h4 q-mb-lg">{{ t("contact.contact") }}</div>

      <div class="row q-col-gutter-lg">
        <QInput class="col-12 col-sm-6" outlined :label="t('contact.name')" />
        <QInput
          class="col-12 col-sm-6"
          outlined
          :label="t('contact.lastname')"
        />
        <QInput
          class="col-12 col-sm-6"
          outlined
          :label="t('contact.company')"
        />
        <QInput class="col-12 col-sm-6" outlined :label="t('contact.job')" />
        <QInput class="col-12 col-sm-6" outlined :label="t('contact.email')" />
        <QInput class="col-12 col-sm-6" outlined :label="t('contact.phone')" />
      </div>

      <QInput
        class="q-my-lg"
        outlined
        :label="t('contact.comments')"
        type="textarea"
      />

      <div class="flex justify-center">
        <QBtn color="primary" rounded padding="sm lg">{{
          t("contact.send")
        }}</QBtn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const languages = ["es", "en"];
</script>

<style scoped lang="scss">
.v-container {
  background-color: white;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  gap: 16px;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
}

.v-info-card {
  background: rgb(0, 226, 255);
  background: linear-gradient(
    315deg,
    #00e2ff -15%,
    #00a1eb 20%,
    #0174e0 60%,
    rgba(14, 0, 255, 0.6923144258) 95%
  );
  color: white;

  max-width: 720px;
  border-radius: 1.2rem;
  padding: 12px;
  @media (min-width: 600px) {
    padding: 2%;
  }
}

.v-info-card--title {
  margin-bottom: 1.6rem;
}

.v-contact-section {
  max-width: 720px;
  padding: 2%;
}
</style>
