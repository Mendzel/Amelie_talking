<script setup lang="ts">
const post = {
  category: 'Borderline',
  title: 'Mechanizmy obronne w borderline - Dewaluacja',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  date: '2021-01-01',
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
      <div class="most-recent-post-content">
        <p>{{ post.content }}</p>
      </div>
    </div>
    <img
      class="most-recent-image"
      src="https://www.sueddeutsche.de/image/sz.1.2895624/704x396?v=1519260628"
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

    &-content {
      color: rgb(226, 226, 226);
      font-size: 14px;
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
