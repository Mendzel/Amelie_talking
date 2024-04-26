<script lang="ts" setup>
import { ButtonSize } from '~/model/shared/ButtonSizes';
import { type PropType } from 'vue';

defineProps({
  icon: {
    type: String,
    default: undefined,
  },
  square: {
    type: Boolean,
    default: true,
  },
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSize.medium,
  },
  color: {
    type: String,
    default: 'purple-8',
  }
});
</script>

<template>
  <QBtn
    :icon="icon"
    :square="square"
    :round="round"
    :color="color"
    :size="size"
  />
</template>