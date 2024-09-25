<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: 'Adres email',
  },
  hint: {
    type: String,
    default: undefined,
  },
  required: {
    type: Boolean,
    default: false,
  }
});

const model = defineModel<string | undefined>();
</script>

<template>
  <FormBaseInput
    v-model="model"
    outlined
    :label="label"
    :hint="hint"
    type="email"
    :required="required"
  >
    <template #inputIcon>
      <q-icon name="email" />
    </template>
  </FormBaseinput>
</template>