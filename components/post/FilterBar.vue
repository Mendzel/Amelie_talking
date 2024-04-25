<script lang="ts" setup>
import { PostCategory } from '~/model/filter/categories';

const categories = computed(() => {
  return Object.values(PostCategory);
});
const searchFilter = ref<string>('');
const categorySelected = ref<string | undefined>();

watch(
    () => searchFilter.value,
    () => {
        console.log(searchFilter.value);
        // LATER USE SEARCHING
    }
);

watch(
    () => categorySelected.value,
    () => {
        console.log(categorySelected.value);
        // LATER USE FILTERING
    }
);
</script>

<template>
  <div class="filter-bar row">
    <div class="col-8 row">
      <div class="filter-bar-categories gt-sm">
        <div
          v-for="category in categories"
          :key="category"
          class="filter-bar-categories-button"
        >
          <div @click="categorySelected = category">
            {{ category }}
          </div>
        </div>
      </div>
      <FormSelectInput
        v-model="categorySelected"
        class="lt-md col-6"
        label="Kategoria"
        :options="categories"
      />
    </div>
    <div class="filter-bar-search col-4">
      <FormTextInput
        v-model="searchFilter"
        debounce="500"
        input-icon="search"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.filter-bar {
  background-color: white;
  padding: 10px;
  border-radius: 8px;

  &-categories {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;

    &-button {
      cursor: pointer;
      color: $secondary;
      font-size: 18px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
