(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(vueGl => {
  vueGl.App = Vue.extend({
    template: `
      <haml></haml>
      <section class="app fade-in" v-cloak>
        <h2>{{ message }}</h2>
        <comments :comments='comments' :addindex='addindex'></comments>
        <a href="/index2.html" class='btn btn-success'>Go To App 2</a>
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

},{}],2:[function(require,module,exports){
((vueGl) => {
  vueGl.Comments = Vue.extend({
    props: ['comments', 'addindex'],
    template: `
      <section class="comments">
        <article class="comment" v-for="comment in comments">
          <h4 @click='addindex($index)'>{{ comment }}</h4>
        </article>
      </section>
    `
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('comments', vueGl.Comments)
},{}],3:[function(require,module,exports){
((vueGl) => {
  vueGl.Haml = Vue.extend({
    template: `<h1>HAML and:</h1>`
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('Haml', vueGl.Haml)
},{}],4:[function(require,module,exports){
require('./../components/App')
require('./../components/Haml')
require('./../components/Comments')

const state = {
  message: 'Vuex/Vue.js!',
  comments: [
    "wow",
    "ok",
    "nice"
  ]
}

const mutations = {
  INCREMENT (state) {
    state.comments = state.comments.map(comment => {
      return comment + 'wut'
    })
  },
  INCREMENT_TWO (state) {
    state.commentsTwo = state.commentsTwo.map(comment => {
      return comment + 'wut'
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  strict: true
})

new Vue({
  el: 'spa',
  store
})
},{"./../components/App":1,"./../components/Comments":2,"./../components/Haml":3}]},{},[4]);
