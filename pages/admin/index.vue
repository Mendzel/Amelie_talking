<script lang="ts" setup>
interface Tab {
  name: string;
  icon: string;
  label: string;
}

definePageMeta({
  layout: false,
});

const splitterModel = ref(10);
const currentTab = ref('posts');

const tabs: Tab[] = [
  {
    name: 'posts',
    label: 'Posty',
    icon: 'post_add',
  },
  {
    name: 'banners',
    icon: 'ad_units',
    label: 'Banery',
  }
];
</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <q-splitter
        v-model="splitterModel"
      >
        <template #before>
          <q-tabs
            v-model="currentTab"
            vertical
            active-color="yellow-3"
            active-bg-color="purple-8"
            class="text-purple-8"
          >
            <q-tab
              v-for="tab in tabs"
              :key="tab.name"
              :name="tab.name"
              :icon="tab.icon"
              :label="tab.label"
            />
          </q-tabs>
        </template>

        <template #after>
          <q-tab-panels
            v-model="currentTab"
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
                <NuxtLink to="/admin/post">
                  <ButtonSecondary
                    label="Dodaj post"
                    icon="add"
                  />
                </NuxtLink>
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