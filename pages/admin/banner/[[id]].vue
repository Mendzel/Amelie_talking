<script lang="ts" setup>
import { mockBanners } from '~/model/mocks/banners';
import type { BannerItem } from '~/model/banners/endpoints';

const route = useRoute();

definePageMeta({
  layout: false,
});

const downloadedBanner = ref<BannerItem | null>();

const banner = ref<BannerItem>({
  title: '',
  bannerUrl: '',
});

const getPost = (): BannerItem => {
  const id = +route.params.id;
  // const post = await $axios.$get<PostListItem>(`/api/posts/${id}`);

  return mockBanners[id];
};

watch(
  () => route.params.id,
  async (id) => {
    if (id) {
      downloadedBanner.value = getPost();
      banner.value = downloadedBanner.value;
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
      <AdminBannerEditor
        v-model="banner"
        class="editor-form"
      />
      <div class="editor-preview">
        Podgląd:
        <img :src="banner.bannerUrl">
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.editor {
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  max-width: 1300px;
    background-color: $white;
    padding: 30px;
    border-radius: 8px;

    &-form {
      width: 70%;
    }

    &-preview {
      width: 300px;

      img {
        width: 263px;
        height: 200px;
      }
    }
}
</style>
