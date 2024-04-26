<template>
  <div class="box">
    <div class="box-photo">
      <img
        :src="post.photoCover"
        :alt="post.description"
      >
    </div>
    <div class="box-post">
      <div class="box-post-category q-mb-sm">
        <PostCategory :category="post.category" />
      </div>
      <div class="box-post-title">
        <h2>{{ post.title }}</h2>
      </div>
      <div class="box-post-description">
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PostItem } from '~/model/post/endpoints';

defineProps({
  post: {
    type: Object as PropType<PostItem>,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid lightgray;
  display: flex;
  padding: 10px;
  cursor: pointer;

  &-photo {
    margin-right: 30px;

    img {
      width: 260px;
      height: 180px;
    }
  }

  &-post {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title {
      margin-bottom: 10px;

      h2 {
        font-size: 24px;
        line-height: normal;
        margin: 0;
      }
    }
  }
}
</style>