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