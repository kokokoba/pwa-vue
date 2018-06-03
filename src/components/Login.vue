<template>
  <div class="login">
    <img src="../assets/logo.png"/>
    <h2>ログイン</h2>
    <p v-if="isError" class="has-error">{{ message }}</p>
    <input type="text" placeholder="メールアドレス" v-model="username">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="login" >Login</button>
    <p>
      <router-link to="/register">登録はこちら</router-link>
    </p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Login',
    data: function () {
      return {
        username: '',
        password: '',
        message: '',
        isError: false
      }
    },
    methods: {
      login: function () {
        firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
          user => {
            alert('ログインしました')
            this.$router.push('/test')
          },
          err => {
            switch (err.code) {
              case 'auth/invalid-email':
                this.message = 'メールアドレスの形式が正しくありません';
                break;
              case 'auth/user-disabled':
                this.message = ('ユーザーが無効化されています');
                break;
              case 'auth/user-not-found':
                this.message = ('ユーザーが見つ借りません');
                break;
              case 'auth/wrong-password':
                this.message = ('パスワードが間違っています');
                break;
              default:
                this.message = ('ログインできませんでした');
            }
            this.isError = true;
          }
        )
      },
      logout() {
        firebase.auth().signOut()
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .login {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center
  }
  input {
    margin: 10px 0;
    padding: 10px;
  }
</style>
