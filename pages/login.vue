<script setup lang="ts">
const onSubmit = () => {};

const name = ref('');
const password = ref('');
</script>

<template>
  <div class="q-pa-md">
    <q-form
      class="q-gutter-md login-form"
      @submit="onSubmit"
    >
      <FormEmailInput v-model="name" />

      <FormPasswordInput v-model="password" />

      <ButtonSecondary
        label="Wyślij"
        type="submit"
      />
    </q-form>
  </div>
</template>

<style>
.login-form {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
</style>
