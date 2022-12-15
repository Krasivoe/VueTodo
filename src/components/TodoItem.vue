<template>
  <li class="item" :class="{done: todo.completed}">
    <div class="input-container">
      <input
        @change="updateCompleted"
        :id="index"
        class="custom-checkbox"
        type="checkbox">
      <label :for="index"></label>
    </div>
    <div class="item__inner">
      <strong>
        {{ index }}
      </strong>
      <span class="item__text">
        {{ todo.title }}
      </span>
    </div>
    <button
      class="item__btn"
      @click="removeTodo"
    ></button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  methods: {
    updateCompleted() {
      this.$emit('update-todo', this.todo);
    },
    removeTodo() {
      this.$emit('remove-todo', this.todo.id);
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $black;
  border: 2px solid $dark;
  border-radius: 3px;
  padding: .6rem 2rem;
  background: #f7f7f7;
  &__btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: transform 0.1s linear;
    background: url("@/assets/images/delete-cross.png") no-repeat center;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.done {
  background: $light;
  color: #9d9d9d;
  .item__text {
    text-decoration: line-through;
  }
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    cursor: pointer;
    display: inline-flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &::before {
      content: "";
      width: 20px;
      height: 20px;
      background: url("@/assets/images/checkbox/checkbox_blank.svg") no-repeat center;
      transition: transform 0.1s linear;
    }
  }
  &:checked + label::before {
    background: url("@/assets/images/checkbox/checkbox_check.svg") no-repeat center;
  }
  &:hover + label::before {
    transform: scale(1.1);
  }
}

@media screen and (max-width: 500px) {
  .item {
    padding: .7rem .3rem;
    &__inner {
      gap: 15px;
    }
    &__text {
      max-width: 200px;
      text-align: left;
    }
  }
}
</style>
