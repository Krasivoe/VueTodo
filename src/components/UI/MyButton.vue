<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped lang="scss">
.btn {
  height: 28px;
  border: 1px solid $light;
  border-radius: 3px;
  padding: 3px 6px;
  color: $black;
  background: #fff;
  transition: all 0.2s linear;
  &:hover {
    color: $light;
    border: 1px solid $black;
    background: $dark;
  }
}
</style>
