<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="updateInput"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  height: 28px;
  border: 1px solid $light;
  border-radius: 3px;
  padding: 4px 10px;
  transition: border 0.3s linear;
  &::placeholder {
    color: $light;
    transition: color 0.3s linear;
  }
  &:focus, &:hover {
    border: 1px solid $dark;
    &::placeholder {
      color: #c2c2c2;
    }
  }
}

@media screen and (max-width: 400px) {
  .input {
    font-size: 16px;
  }
}
</style>
