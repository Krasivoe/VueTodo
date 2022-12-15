<template>
  <form class="form" @submit.prevent="createTodo">
    <div class="form__close">
      <img src="@/assets/images/delete-cross.png" alt="close" @click="hideModal">
    </div>
    <div class="form__inner">
      <h3 class="form__title">Creating event</h3>
      <my-input v-focus v-model.trim="title"/>
      <my-button type="submit">
        Save
      </my-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    createTodo() {
      if (this.title) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit('create-todo', newTodo);
        this.title = '';
      }
    },
    hideModal() {
      this.$emit('hide-modal', false);
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  min-height: 155px;
  &__close {
    display: flex;
    align-self: flex-end;
    & img {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: transform 0.2s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
  &__title {
    font-size: 20px;
    color: $dark;
  }
  & button[type="submit"] {
    width: 80px;
  }
}
</style>
