<template>
  <div class="list">
    <PostBox
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script lang="ts" setup>
import endpoints, { type PostListItem } from '~/model/post/endpoints';

const posts = ref<PostListItem[]>([]);

const loadPosts = async () => {
  posts.value = await endpoints.getPosts();
};

onMounted(() => {
  loadPosts();
});
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
}
</style>