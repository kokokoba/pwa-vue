<template>
  <section class="section">
    <div class="card" v-show="!isEditing">
      <div class="card-header">
        <p class="card-header-title">
          {{ todo.title }}
        </p>
        <a class="card-header-icon">
          <span class="status">
            <a class="button is-success is-small" v-show="!isEditing && todo.done" disabled>
              完了
            </a>
            <a class="button is-danger is-small" @click="completeTodo(todo)" v-show="!isEditing && !todo.done">
              未完
            </a>
          </span>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          {{ todo.project }}
        </div>
      </div>
      <div class="card-footer">
        <a class="card-footer-item" @click="showForm">編集</a>
        <a class="card-footer-item" @click="deleteTodo(todo)">削除</a>
      </div>
    </div>

    <div class="edit-form box" v-show="isEditing">
      <div class="form">
        <div class="field">
          <label class="label">タイトル</label>
          <div class="control">
            <input class="input" type="text" v-model="todo.title" />
          </div>
        </div>
        <div class="field">
          <label class="label">内容</label>
          <div class="control">
            <input class="input" type="text" v-model="todo.project" />
          </div>
        </div>
        <div class="close">
          <a class="button is-small" @click="hideForm">保存</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data () {
      return {
        isEditing: false
      }
    },
    methods: {
      showForm () {
        this.isEditing = true
      },
      hideForm () {
        this.isEditing = false
      },
      deleteTodo (todo) {
        this.$emit('delete-todo', todo)
      },
      completeTodo (todo) {
        this.$emit('complete-todo', todo)
      }
    }
  }
</script>

<style>

</style>
