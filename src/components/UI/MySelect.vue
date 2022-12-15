<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: String,
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.select {
  height: 28px;
  border: 1px solid $light;
  border-radius: 3px;
  padding: 3px 6px;
  color: $black;
  background: #fff;
  transition: all 0.2s linear;
  &:hover,
  &:focus {
    border: 1px solid $black;
  }
}
</style>
