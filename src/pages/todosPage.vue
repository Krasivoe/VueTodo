<template>
  <main class="container todo">
    <h2 class="main-title">Todo List</h2>
    <hr class="bottom-line">

    <div class="todo__control">
      <div class="left-block">
        <my-button @click="showModal">
          Create event
        </my-button>
        <my-select v-model="defaultSort" :options="sortOptions"></my-select>
      </div>
      <div class="right-block">
        <my-input v-model.trim="searchValue" placeholder="Search..."/>
      </div>
    </div>

    <hr class="bottom-line">
    <my-loader v-if="isTodosLoading"/>
    <todo-list
      v-else-if="todos.length"
      :loading="isTodosLoading"
      :todos="searchedTodo"
      @update-todo="updateTodo"
      @remove-todo="removeTodo"
    />
    <div v-else>
      <h3 class="info">Events empty...</h3>
    </div>

    <my-modal v-model:show="modalVisible">
      <todo-form
        @create-todo="createTodo"
        @hide-modal="hideModal"
      />
    </my-modal>
  </main>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/todoForm.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  data() {
    return {
      modalVisible: false,
      isTodosLoading: true,
      defaultSort: 'number',
      searchValue: '',
      sortOptions: [
        { value: 'number', name: 'By number' },
        { value: 'name', name: 'By name' },
      ],
      todos: [],
    };
  },
  methods: {
    updateTodo(todo) {
      todo.completed = !todo.completed;
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    showModal() {
      this.modalVisible = true;
    },
    createTodo(todo) {
      this.todos.push(todo);
      this.modalVisible = false;
    },
    hideModal() {
      this.modalVisible = false;
    },
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=66')
      .then(response => response.json())
      .then(json => {
        this.todos = json.filter(item => !item.completed);
        this.isTodosLoading = false;
      });
  },
  watch: {
    defaultSort(value) {
      switch (value) {
        case 'number':
          return this.todos.sort((todo1, todo2) => todo1.id - todo2.id);
        case 'name':
          return this.todos.sort((todo1, todo2) => todo1.title.localeCompare(todo2.title));
        default:
          return this.todos;
      }
    },
  },
  computed: {
    searchedTodo() {
      return this.todos.filter(todo => todo.title.toLowerCase()
        .includes(this.searchValue.toLowerCase()));
    },
  },
};
</script>

<style lang="scss">
.todo {
  padding-bottom: 30px;
  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    min-height: 50px;
    .left-block {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}

.info {
  @include flex-center();
  margin-top: 20px;
  & h3 {
    color: crimson;
  }
}

@media screen and (max-width: 500px) {
  .todo {
    &__control {
      justify-content: center;
      gap: 15px;
      .left-block {
        gap: 20px;
      }
    }
  }
}
</style>
