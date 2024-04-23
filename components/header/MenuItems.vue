<template lang="">
  <li class="header-menu-list-button">
    <router-link
      class="link"
      to="/psychology"
    >
      Psychologia
    </router-link>
  </li>
  <li class="header-menu-list-button">
    <router-link
      class="link"
      to="/selfcare"
    >
      Zdrowie
    </router-link>
  </li>
  <li class="header-menu-list-button">
    <router-link
      class="link"
      to="/selfcare"
    >
      Pomoc
    </router-link>
  </li>
  <li class="header-menu-list-button">
    <router-link
      class="link"
      to="/contact"
    >
      Kontakt
    </router-link>
  </li>
  <li class="header-menu-list-button">
    <router-link
      class="link"
      to="/admin"
    >
      Admin
    </router-link>
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