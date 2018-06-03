<template>
  <div class="hello">
    <h1>Hello {{ name }}!!</h1>
    <h1>{{ msg }}</h1>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: firebase.auth().currentUser.email
      }
    },
    methods: {
      signOut: function () {
        firebase.auth().signOut().then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
</script>

<style>
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
  color: #35495E;
}
</style>
