import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


Vue.use(VueMaterial)
Vue.use(VueFormWizard)
Vue.config.productionTip = false

let app = ''

firebase.initializeApp({
  apiKey: 'AIzaSyA0ZJQ2C-WzQHml2NHcdjyHyDQLY_N40S0',
  authDomain: 'hair-9f6b3.firebaseapp.com',
  databaseURL: 'https://hair-9f6b3.firebaseio.com',
  projectId: 'hair-9f6b3',
  storageBucket: 'hair-9f6b3.appspot.com',
  messagingSenderId: '1098971751058'
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
