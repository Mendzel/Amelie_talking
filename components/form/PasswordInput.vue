<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: 'Hasło',
  },
  hint: {
    type: String,
    default: undefined,
  },
  required: {
    type: Boolean,
    default: true,
  }
});

const model = defineModel<string | undefined>();
const isPassword = ref(true);
</script>

<template>
  <FormBaseInput
    v-model="model"
    outlined
    :label="label"
    :hint="hint"
    :type="isPassword ? 'password' : 'text'"
    :required="required"
  >
    <template #inputIcon>
      <q-icon
        :name="isPassword ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPassword = !isPassword"
      />
    </template>
  </FormBaseinput>
</template>
