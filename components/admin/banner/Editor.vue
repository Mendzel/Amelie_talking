<template>
  <div class="editor-form q-mt-md">
    <FormTextInput
      v-model="model.title"
      class="q-mb-md"
      label="Tytuł"
    />
    <FormTextInput
      v-model="model.bannerUrl"
      class="q-mb-md"
      label="Baner (link)"
    />
    <ButtonSecondary
      label="Zapisz"
      type="submit"
      class="editor-form-button"
    />
  </div>
</template>

<script lang="ts" setup>
import type { BannerItem } from '~/model/banners/endpoints';

const model = defineModel<BannerItem>({
  required: true,
});
</script>

<style scoped lang="scss">
.editor-form {
  display: flex;
  flex-direction: column;

  &-button {
    width: 30%;
    margin: auto;
  }
}
</style>