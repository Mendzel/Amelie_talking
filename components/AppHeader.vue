<script lang="ts" setup>
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = true;
};

</script>

<template>
  <div class="header q-px-md q-py-sm">
    <div class="header-logo">
      <router-link to="/">
        <img
          src="@/public/logo.png"
          alt="logo"
        >
      </router-link>
    </div>
    <div class="header-menu">
      <ul class="gt-md header-menu-list">
        <HeaderMenuItems />
      </ul>
    </div>
    <div class="header-mobile lt-lg">
      <q-btn
        class="header-mobile-button"
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer"
      />
    </div>
  </div>
  <q-drawer
    v-model="leftDrawerOpen"
    class="drawer"
    side="left"
    overlay
    behavior="mobile"
    elevated
  >
    <HeaderMenuItems class="drawer=items" />
  </q-drawer>
</template>

<style lang="scss">
@import '@/assets/colors.scss';

.header {
  width: 100%;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 50px;

  &-logo {
    width: 8rem;
    img {
      width: 100%;
    }
  }

  &-menu {
    margin-right: 50px;
    max-width: 60%;
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-list {
      display: flex;
      align-items: center;
      list-style-type: none;
      height: 100%;

      &-button {
        display: flex;
        padding: 0.8rem;
        margin: 0 1rem;
        height: fit-content;
        color: $secondary !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.35s ease;
        position: relative;
      }

      &-button:hover {
        cursor: pointer;
      }

      &-button::before,
      &-button::after {
        content: '';
        height: 14px;
        width: 14px;
        position: absolute;
        transition: all 0.35s ease;
        opacity: 0;
      }

      &-button::before {
        content: '';
        right: 0;
        top: 0;
        border-top: 3px solid $secondary;
        border-right: 3px solid $secondary;
        transform: translate(-100%, 50%);
      }

      &-button:after {
        content: '';
        left: 0;
        bottom: 0;
        border-bottom: 3px solid $secondary;
        border-left: 3px solid $secondary;
        transform: translate(100%, -50%);
      }

      &-button:hover:before,
      &-button:hover:after {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }

  &-mobile {
    display: flex;
    align-items: end;

    &-button {
      color: $secondary;
    }
  }
}

.drawer {
  background-color: $primary;

  .header-menu-list-button {
    margin: 0;
    padding: 1rem 0;
    border-bottom: 1px solid $secondary;
  }

  &-items {
    width: 100%;
  }
}
</style>
