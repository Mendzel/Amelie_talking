<script lang="ts" setup>
import type { PostItem } from '~/model/post/endpoints';

definePageMeta({
  layout: false,
});

const model = ref<PostItem>({
    title: '',
    description: '',
    category: undefined,
    photoCover: '',
    content: '',
});
</script>

<template>
  <NuxtLayout name="admin">
    <div class="editor">
      <div class="editor-content">
        <FormTextInput
          v-model="model.title"
          label="Tytuł"
        />
        <FormTextInput
          v-model="model.description"
          label="Opis"
        />
        <FormCategoriesSelect
          v-model="model.category"
        />
        <FormTextInput
          v-model="model.photoCover"
          label="Grafika"
        />
        Treść posta
        <q-editor
          v-model="model.content"
          min-height="5rem"
        />
      </div>
      <div class="editor-preview">
        {{ model.title }}
        <div v-html="model.content" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.editor {
    width: 100%;
    display: flex;

    &-content {
        width: 20%;
    }

    &-preview {
        width: 80%;
        max-width: 1300px;
        background-color: white;
        border-radius: 8px;
    }
}
</style>