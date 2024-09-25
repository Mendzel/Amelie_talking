<template>
  <div
    v-if="post"
    class="post"
  >
    <div class="post-image q-mb-lg">
      <img
        :src="post.photoCover"
        :alt="post.title"
      >
    </div>
    <h2 class="post-title">
      {{ post.title }}
    </h2>
    <div class="post-data q-mb-sm">
      <div class="q-mr-md">
        <q-icon
          name="event"
          class="q-mr-sm"
        /><span class="bold">Dodano: </span>{{ post.dateCreated }}
      </div>
      <!-- <div><span class="bold">Kategoria: </span> {{ post.category?.name }}</div> -->
    </div>
    <div class="post-content">
      <div class="post-content-main">
        <div class="post-content-main-description">
          {{ post.description }}
        </div>
        <div v-html="post.content" />
      </div>
      <div class="post-content-rightbar">
        <div>placeholder</div>
      </div>
    </div>
  </div>

  <div v-else>
    <PostNotLoaded />
  </div>
</template>

<script lang="ts" setup>
import { mockPosts } from '~/model/mocks/posts';
import type { PostListItem } from '~/model/post/endpoints';

const route = useRoute();

const post = ref<PostListItem>();

const getPost = (): PostListItem => {
  const id = +route.params.id;
  // const post = await $axios.$get<PostListItem>(`/api/posts/${id}`);

  return mockPosts[id];
};

watch(
  () => route.params.id,
  async (id) => {
    if (id) {
      post.value = getPost();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.post {
  background-color: $white;
  border-radius: 8px;
  padding: 20px;

  &-image {
    width: 100%;
    text-align: center;

    img {
      width: 80%;
    }
  }

  &-title {
    font-size: 44px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  &-data {
    font-size: 16px;
    font-weight: bold;
    color: gray;
    display: flex;
  }

  &-content {
    display: flex;

    &-main {
      width: 80%;
      padding: 10px;
      margin-right: 10px;
      border-right: 1px solid gray;

      &-description {
        margin-bottom: 20px;
      }
    }
  }
}

.bold {
  font-weight: bold;
}
</style>
