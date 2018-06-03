<template>
  <div class="test">
    <create-todo @new-todo="newTodo"></create-todo>
    <todo-list :todoList="todoList"></todo-list>
  </div>
</template>

<script>
  import TodoList from './TodoList'
  import CreateTodo from './CreateTodo'
  export default {
    name: 'Test',
    components: {
      TodoList,
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
