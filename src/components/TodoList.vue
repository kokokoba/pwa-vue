<template>
  <div class="todoList">
    <p>完了: <strong>{{ todoList.filter(todo => {return todo.done === true}).length }}</strong></p>
    <p>未完: <strong>{{ todoList.filter(todo => {return todo.done === false}).length }}</strong></p>
    <create-todo @new-todo="newTodo"></create-todo>
    <section class="section cards">
      <div class="container">
        <div class="columns is-multiline">
          <todo class="column is-4" @complete-todo="completeTodo" @delete-todo="deleteTodo"
                v-for="todo in todoList" :todo="todo"></todo>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Todo from './Todo'
  import CreateTodo from './CreateTodo'
  export default {
    name: 'TodoList',
    components: {
      Todo,
      CreateTodo
    },
    data () {
      return {
        todoList: [{
          title: 'Todo 1',
          project: 'Project 1',
          done: false
        }, {
          title: 'Todo 2',
          project: 'Project 2',
          done: false
        }, {
          title: 'Todo 3',
          project: 'Project 3',
          done: true
        }]
      }
    },
    methods: {
      newTodo (newTodo) {
        this.todoList.push(newTodo)
      },
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

<style lang="scss">
  @import "../../node_modules/bulma/bulma.sass";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
