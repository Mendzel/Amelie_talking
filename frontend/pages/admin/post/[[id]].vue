<script lang="ts" setup>
import endpoints, { type PostFormItem, type PostListItem } from '~/model/post/endpoints';
import _ from 'lodash';

const route = useRoute();

definePageMeta({
  layout: false,
});

const previewVisible = ref(false);

const post = ref<PostFormItem>({
  title: '',
  content: '',
  categoryId: undefined,
  description: '',
  photoCover: '',
  dateCreated: new Date(Date.now()).toLocaleDateString(),
});

const getPost = async () => {
  const id = +route.params.id;
  const response = await endpoints.getPost(id);

  convertPostToFormItem(response);
};

const convertPostToFormItem = (downloadedPost: PostListItem) => {
  post.value = {
    ..._.omit(downloadedPost, 'category'),
    categoryId: downloadedPost.category?.id,
  };
};

watch(
  () => route.params.id,
  async (id) => {
    if (id) {
      getPost();
    }
  },
  { immediate: true }
);
</script>

<template>
  <NuxtLayout name="admin">
    <NuxtLink to="/admin">
      <ButtonSecondary
        label="Wróć na listę"
        class="q-ml-lg"
      />
    </NuxtLink>
    <div class="editor">
      <div class="editor-toggle q-mb-lg">
        Edytor
        <q-toggle
          v-model="previewVisible"
          label="Podgląd"
          color="purple-8"
        />
      </div>
      <div class="editor-content">
        <AdminPostEditor
          v-if="!previewVisible"
          v-model="post"
        />
        <AdminPostPreview
          v-if="previewVisible"
          :preview-data="post"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.editor {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border: 2px solid $secondary;
    color: $secondary;
    padding: 20px;
    border-radius: 12px;
  }

  &-content {
    width: 100%;
    max-width: 1300px;
    background-color: $white;
    padding: 30px;
    border-radius: 8px;
  }
}
</style>
