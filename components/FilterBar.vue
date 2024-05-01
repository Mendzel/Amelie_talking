<script lang="ts" setup>
const searchFilter = ref<string>('');
const categorySelected = ref<number | undefined>();

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
      <FormCategoriesSelect
        v-model="categorySelected"
        class="col-6"
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
