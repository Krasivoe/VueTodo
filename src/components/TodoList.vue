<template>
  <transition name="empty">
    <ul class="list">
      <transition-group name="todo-list">
        <todo-item
          v-for="(todo, idx) in todos"
          :todo="todo"
          :index="++idx"
          :key="todo.id"
          @update-todo="updateTodo"
          @remove-todo="removeTodo"
        />
      </transition-group>
    </ul>
  </transition>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
  methods: {
    updateTodo(todo) {
      this.$emit('update-todo', todo);
    },
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  font-size: 18px;
  list-style-type: none;
  margin-top: 20px;
}

.todo-list-move,
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.3s ease;
}

.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.empty-enter-active,
.empty-leave-active {
  transition: opacity 0.2s linear;
}

.empty-enter-from,
.empty-leave-to {
  opacity: 0;
}
</style>
