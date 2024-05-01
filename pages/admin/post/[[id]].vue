<script lang="ts" setup>
import { mockPosts } from '~/model/mocks/posts';
import type { PostFormItem, PostListItem } from '~/model/post/endpoints';
import _ from 'lodash';

const route = useRoute();

definePageMeta({
  layout: false,
});

const previewVisible = ref(false);
const downloadedPost = ref<PostListItem | null>();

const post = ref<PostFormItem>({
  title: '',
  content: '',
  categoryId: undefined,
  description: '',
  photoCover: '',
  dateCreated: new Date(Date.now()).toLocaleDateString(),
});

const getPost = (): PostListItem => {
  const id = +route.params.id;
  // const post = await $axios.$get<PostListItem>(`/api/posts/${id}`);

  return mockPosts[id];
};

const convertPostToFormItem = () => {
  post.value = {
    ..._.omit(downloadedPost.value, 'category'),
    categoryId: downloadedPost.value?.category?.id,
  };
};

watch(
  () => route.params.id,
  async (id) => {
    if (id) {
      downloadedPost.value = getPost();
      convertPostToFormItem();
    }
  },
  { immediate: true }
);
</script>

<template>
  <NuxtLayout name="admin">
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
