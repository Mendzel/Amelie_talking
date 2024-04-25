<script setup lang="ts">
import type { LoginForm } from '~/model/login/endpoints';

const model = ref<LoginForm>({
  email: '',
  password: '',
});

const onSubmit = () => {};
</script>

<template>
  <div class="q-pa-md">
    <q-form
      class="q-gutter-md login-form"
      @submit="onSubmit"
    >
      <FormEmailInput v-model="model.email" />

      <FormPasswordInput v-model="model.password" />

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
