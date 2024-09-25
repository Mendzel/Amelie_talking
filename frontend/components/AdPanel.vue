<template>
  <div class="ad-panel">
    <div
      v-if="banner"
      class="ad-panel-banner q-mb-md"
    >
      <NuxtLink :to="banner.bannerLink">
        <img :src="banner.bannerUrl">
      </NuxtLink>
    </div>
    <div class="ad-panel-adsense">
      Adsense ad placeholder
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BannerItem } from '~/model/banners/endpoints';
import { mockBanners } from '~/model/mocks/banners';

const banner = ref<BannerItem>();

const getBanner = (): BannerItem => {
  // banner.value = await $axios.$get<BannerItem>(`/api/getDefaultBanner`);

  return mockBanners[0];
};

onMounted(() => {
  banner.value = getBanner();
});
</script>

<style lang="scss" scoped>
.ad-panel {
  width: 400px;
  background-color: white;
  border-radius: 8px;
  padding: 15px;

  &-banner {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &-adsense {
    width: 100%;
    height: 700px;
    background-color: gray;
  }
}
</style>