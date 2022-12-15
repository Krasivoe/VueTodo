<template>
  <transition name="modal">
    <div class="modal" v-if="show" @click="hideModal" @keydown.esc="hideModal">
      <div class="modal__content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  &__content {
    margin: 150px auto auto auto;
    padding: 15px;
    background: $white;
    border-radius: 10px;
    min-height: 50px;
    min-width: 300px;
    overflow: hidden;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s linear;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
