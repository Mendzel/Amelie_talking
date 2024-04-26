<template>
  <div class="footer">
    @ Amelie Talking 2024 | Wykonano przez:<a
      class="footer-link"
      href="https://mendzel-dev.pl"
      target="_blank"
      rel="noopener noreferrer"
    > Konrad Mendzelewski</a>
  </div>
</template>

<style lang="scss">
@import '@/assets/colors.scss';
.footer {
  background-color: $secondary;
  color: $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;

  &-link {
    color: $primary;
    text-decoration: none;
    margin-left: 5px;
  }
}

@media screen and (max-width: 450px) {
  .footer {
    font-size: 0.7rem;

  }
}
</style>