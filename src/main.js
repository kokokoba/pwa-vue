import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

const config = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN.firebaseapp.com",
  databaseURL: "YOUR_DOMAIN.firebaseio.com",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID"
};

firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
