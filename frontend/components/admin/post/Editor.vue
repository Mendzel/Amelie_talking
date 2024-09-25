<template>
  <div class="editor-form">
    <FormTextInput
      v-model="model.title"
      class="q-mb-md"
      label="Tytuł"
    />
    <FormTextInput
      v-model="model.description"
      class="q-mb-md"
      label="Opis"
    />
    <FormCategoriesSelect
      v-model="model.categoryId"
      class="q-mb-md"
    />
    <FormTextInput
      v-model="model.photoCover"
      class="q-mb-md"
      label="Grafika (link)"
    />
    <FormHtmlEditor
      v-model="model.content"
      class="q-mb-md"
      label="Treść posta"
    />
    <ButtonSecondary
      label="Zapisz"
      type="submit"
      class="editor-form-button"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PostFormItem } from '~/model/post/endpoints';

const model = defineModel<PostFormItem>({
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