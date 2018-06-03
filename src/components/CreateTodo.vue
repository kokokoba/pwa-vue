<template>
  <div class="content is-centered">
    <a class="button is-outlined is-small" @click="openForm" v-show="!isCreating">追加</a>
    <div class="new-form box form-middle" v-show="isCreating">
      <div class="field">
        <label class="label">タイトル</label>
        <div class="control">
          <input v-model="titleText" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">内容</label>
        <div class="control">
          <input v-model="projectText" class="input" type="text" />
        </div>
      </div>
      <div class="create-options">
        <a class="button" id="createButton" @click="closeForm">キャンセル</a>
        <a class="button" id="cancelButton" @click="sendForm">作成</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        titleText: '',
        projectText: '',
        isCreating: false
      }
    },
    methods: {
      openForm () {
        this.isCreating = true
      },
      closeForm () {
        this.isCreating = false
      },
      sendForm () {
        if (this.titleText.length > 0 && this.projectText.length > 0) {
          const title = this.titleText
          const project = this.projectText
          this.$emit('new-todo', {
            title,
            project,
            done: false
          })
          this.titleText = ''
          this.projectText = ''
          this.isCreating = false
        }
      }
    }
  }
</script>

<style>
  .form-middle {
    width: 340px;
    margin: 0 auto;
  }
</style>
