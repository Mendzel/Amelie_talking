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
import { PostCategory } from '~/model/filter/categories';
import type { PostItem } from '~/model/post/endpoints';

const posts: PostItem[] = [
  {
    id: 1,
    title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
    content: '',
    dateCreated: '2024-01-01',
    description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
    Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
    Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
    category: {
      name: PostCategory.bpd,
      color: 'lightgreen',
      textColor: 'black',
    },
    photoCover: 'https://shorturl.at/owHS2',
  },
  {
    id: 2,
    title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
    content: '',
    dateCreated: '2024-01-01',
    description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
    Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
    Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
    category: {
      name: PostCategory.bpd,
      color: 'lightblue',
      textColor: 'white',
    },
    photoCover: 'https://shorturl.at/owHS2',
  },
  {
    id: 3,
    title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
    content: '',
    dateCreated: '2024-01-01',
    description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
    Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
    Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
    category: {
      name: PostCategory.bpd,
      color: 'cyan',
      textColor: '#FFFFFF',
    },
    photoCover: 'https://shorturl.at/owHS2',
  }
];
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
}
</style>