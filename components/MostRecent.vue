<script setup lang="ts">
import { PostCategory } from '~/model/filter/categories';
import type { PostItem } from '~/model/post/endpoints';

const post: PostItem = {
  id: 1,
  title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
  content: '',
  dateCreated: '2024-01-01',
  description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
    Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
    Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
  category: PostCategory.bpd,
  photoCover: 'https://www.sueddeutsche.de/image/sz.1.2895624/704x396?v=1519260628',
};
</script>

<template>
  <a class="most-recent">
    <div class="most-recent-post">
      <div class="most-recent-post-category">
        <p>{{ post.category }}</p>
      </div>
      <div class="most-recent-post-title">
        <h3>{{ post.title }}</h3>
      </div>
      <div class="most-recent-post-description">
        <p>{{ post.description }}</p>
      </div>
    </div>
    <img
      class="most-recent-image"
      :src="post.photoCover"
    >
  </a>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.most-recent {
  display: flex;
  min-height: 277px;
  text-decoration: none;
  cursor: pointer;

  &-post {
    background-color: $secondary;
    width: 40%;
    padding: 32px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-category {
      color: $primary;
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 18px;
    }

    &-title {
      color: white;
      margin-bottom: 5px;

      h3 {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        line-height: 2rem;
      }
    }

    &-description {
      color: rgb(226, 226, 226);
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  &-image {
    object-fit: cover;
    width: 60%;
    max-height: 300px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}

@media screen and (max-width: 768px) {
  .most-recent {
    flex-direction: column;
    &-post {
      width: 100%;
      padding: 20px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 0;
      border-top-right-radius: 8px;

      &-category {
        margin-bottom: 0;
      }
    }

    &-image {
      width: 100%;
      max-height: 150px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
    }
  }
}
</style>
