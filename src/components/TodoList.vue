<template>
  <div>
    <section class="section cards">
      <div class="container">
        <p>完了: <strong>{{ todoList.filter(todo => {return todo.done === true}).length }}</strong></p>
        <p>未完: <strong>{{ todoList.filter(todo => {return todo.done === false}).length }}</strong></p>
        <div class="columns is-multiline">
          <todo class="column is-4" @complete-todo="completeTodo" @delete-todo="deleteTodo"
                v-for="todo in todoList" :todo="todo"></todo>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  import Todo from './Todo'
  export default {
    props: ['todoList'],
    components: {
      Todo
    },
    methods: {
      deleteTodo (todo) {
        const todoIndex = this.todoList.indexOf(todo);
        this.todoList.splice(todoIndex, 1)
      },
      completeTodo (todo) {
        const todoIndex = this.todoList.indexOf(todo);
        this.todoList[todoIndex].done = true
      }
    }
  }
</script>

<style>
</style>
