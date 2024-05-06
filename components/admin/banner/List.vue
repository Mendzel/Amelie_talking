<template>
  <div class="list">
    <div
      v-for="banner in banners"
      :key="banner.id"
      class="list-banner"
    >
      <div class="list-banner-actions q-mb-sm">
        <NuxtLink :to="getEditPath(banner.id)">
          <ButtonIcon
            class="q-ma-sm"
            icon="edit"
            color="blue"
            :size="ButtonSize.small"
          />
        </NuxtLink>
        <ButtonIcon
          class="q-ma-sm"
          icon="delete"
          color="red"
          :size="ButtonSize.small"
        />
      </div>
      <img
        class="list-banner-image q-mb-md"
        :src="banner.bannerUrl"
      >
      <div class="list-banner-title">
        {{ banner.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BannerItem } from '~/model/banners/endpoints';
import { mockBanners } from '~/model/mocks/banners';
import { ButtonSize } from '~/model/shared/ButtonSizes';

const banners: BannerItem[] = mockBanners;

const getEditPath = (id: number | undefined) => `admin/banner/${id}`;
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  display: flex;

  &-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border-right: 1px solid lightgray;
    padding: 10px;

    &-image {
      width: 263px;
      height: 200px;
      object-fit: cover;
    }

    &-title {
      font-size: 18px;
        line-height: normal;
        margin: auto 0;
    }

    &-actions {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
}
</style>