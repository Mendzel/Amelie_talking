<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const splitterModel = ref(10);
const tab = ref('posts');
</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <q-splitter
        v-model="splitterModel"
      >
        <template #before>
          <q-tabs
            v-model="tab"
            vertical
            active-color="yellow-3"
            active-bg-color="purple-8"
            class="text-purple-8"
          >
            <q-tab
              name="posts"
              icon="post_add"
              label="Posty"
            />
            <q-tab
              name="banners"
              icon="ad_units"
              label="Banery"
            />
          </q-tabs>
        </template>

        <template #after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel
              name="posts"
              class="posts"
            >
              <div class="posts-topbar">
                <ButtonSecondary
                  label="Dodaj post"
                  icon="add"
                />
              </div>
              <AdminPostList class=" q-mr-lg" />
            </q-tab-panel>

            <q-tab-panel name="banners">
              <div class="text-h4 q-mb-md">
                Alarms
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.posts {
  background-color: $primary;

  &-topbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
  }
}
</style>