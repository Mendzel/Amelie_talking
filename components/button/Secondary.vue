<script lang="ts" setup>
import { ButtonSize } from '~/model/form/ButtonSizes';
import { type PropType } from 'vue';

defineProps({
  label: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  iconRight: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'button',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSize.medium,
  }
});
</script>

<template>
  <QBtn
    class="secondary-button"
    :type="type"
    :label="label"
    :icon="icon"
    :icon-right="iconRight"
    :size="size"
  />
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.secondary-button {
  background-color: $secondary;
  color: $primary;
}
</style>