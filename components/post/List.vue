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
import { mockPosts } from '~/model/mocks/posts';
import type { PostListItem } from '~/model/post/endpoints';

const posts: PostListItem[] = mockPosts;
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
}
</style>