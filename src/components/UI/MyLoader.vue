<template>
  <div class="loader">
    <div class="loader__inner"></div>
  </div>
</template>

<script>
export default {
  name: 'my-loader',
};
</script>

<style scoped lang="scss">
.loader {
  @include flex-center();
  margin-top: 20px;
  &__inner {
    width: 30px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: #000 #0000;
    animation: s1 0.5s infinite;
  }
}

@keyframes s1 {
  to {
    transform: rotate(.5turn)
  }
}
</style>
