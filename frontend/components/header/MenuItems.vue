<template lang="">
  <li class="header-menu-list-button">
    <NuxtLink
      class="link"
      to="/psychology"
    >
      Psychologia
    </NuxtLink>
  </li>
  <li class="header-menu-list-button">
    <NuxtLink
      class="link"
      to="/help"
    >
      Pomoc
    </NuxtLink>
  </li>
  <li class="header-menu-list-button">
    <NuxtLink
      class="link"
      to="/admin"
    >
      Admin
    </NuxtLink>
  </li>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.link {
  color: $secondary;
  text-decoration: none;
  width: 100%;
  text-align: center;
}
</style>