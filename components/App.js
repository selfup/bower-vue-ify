(vueGl => {
  vueGl.App = Vue.extend({
    template: `
      <haml></haml>
      <section class="app fade-in" v-cloak>
        <h2>{{ message }}</h2>
        <comments :comments='comments' :addindex='addindex'></comments>
      </section>
    `,
    vuex: {
     getters: {
       message: state => state.message,
       comments: state => state.comments
     }
    },
    methods: {
      addindex() {
        store.dispatch('INCREMENT')
      }
    }
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('app', vueGl.App)
