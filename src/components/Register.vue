<template>
  <div class="register">
    <img src="../assets/logo.png"/>
    <h2>会員登録</h2>
    <p v-if="isError" class="has-error">{{ message }}</p>
    <input type="text" placeholder="メールアドレス" v-model="username">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="register">Register</button>
    <p>
      <router-link to="/login">ログインはこちら</router-link>
    </p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Register',
    data () {
      return {
        username: '',
        password: '',
        message: '',
        isError: false
      }
    },
    methods: {
      register: function () {
        firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
          .then(user => {
            alert(`アカウントを作成しました: ${user.email}`)
          })
          .catch(err => {
            switch (err.code) {
              case 'auth/email-already-in-use':
                this.message = 'メールアドレスがすでに使用されています';
                break;
              case 'auth/invalid-email':
                this.message = ('メールアドレスの形式が正しくありません');
                break;
              case 'auth/operation-not-allowed':
                this.message = ('メールアドレス、またはパスワード方式が有効化されていません');
                break;
              case 'auth/weak-password':
                this.message = ('パスワードが弱すぎます');
                break;
              default:
                this.message = ('登録できませんでした');
            }
            this.isError = true;
          })
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
  .register {
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
