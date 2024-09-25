<template>
  <div class="list">
    <div
      v-for="post in posts"
      :key="post.id"
      class="list-item"
    >
      <div class="list-item-icon">
        <q-icon
          name="summarize"
          size="sm"
        />
      </div>
      <div class="list-item-post">
        <div class="list-item-post-title">
          {{ post.title }}
        </div>
        <div class="list-item-post-actions">
          <NuxtLink :to="getEditPath(post.id)">
            <ButtonIcon
              class="q-ma-sm"
              icon="edit"
              color="blue"
            />
          </NuxtLink>
          <ButtonIcon
            class="q-ma-sm"
            icon="delete"
            color="red"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mockPosts } from '~/model/mocks/posts';
import {type PostListItem } from '~/model/post/endpoints';

const posts: PostListItem[] = mockPosts;

const getEditPath = (id: number | undefined) => `admin/post/${id}`;
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;

  &-item {
  width: 100%;
  border-bottom: 1px solid lightgray;
  align-items: center;
  display: flex;
  padding: 10px;

  &-icon {
    background-color: lightgray;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-right: 20px;
  }

  &-post {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &-title {
      font-size: 24px;
        line-height: normal;
        margin: auto 0;
    }
  }
}
}
</style>