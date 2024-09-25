<template>
  <div>
    <div
      class="q-mb-sm"
      style="font-weight: bold;"
    >
      {{ props.label }}
    </div>
    <q-editor
      v-model="model"
      min-height="25rem"
      :toolbar="toolbarSettings"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
});

const model = defineModel<string>({
  required: true,
});

const toolbarSettings = [
  ['left', 'center', 'right', 'justify'],
  ['bold', 'italic', 'strike', 'underline'],
  ['hr', 'link'],
  [
    {
      label: 'Formatowanie',
      icon: 'text_format',
      list: 'no-icons',
      options: ['p', 'h3', 'h4', 'h5', 'h6', 'code'],
    },
    {
      label: 'Rozmiar czcionki',
      icon: 'text_fields',
      fixedLabel: true,
      fixedIcon: true,
      list: 'no-icons',
      options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7'],
    },
    'removeFormat',
  ],
  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
  ['undo', 'redo'],
  ['viewsource'],
];
</script>
