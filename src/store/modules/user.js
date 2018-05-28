const state = {}

const mutations = {
  LOGIN (state, data) {
    state = data
  },
  LOGOUT (state, data) {
    state = {}
  }
}

/**
 * Vuex Actions
 * @example this.$store.getters.getUserFullName()
 */
const getters = {
  getUserAccount: state => {
    return state
  },
  getUserFullName: state => {
    return (state.first_name && state.last_name)
      ? `${state.first_name} ${state.last_name}`
      : null
  },
  getUserEmail: state => {
    return (state.email)
      ? state.email
      : null
  },
  getUserRole: state => {
    return (state.role)
      ? state.role
      : null
  },
  getUserToken: state => {
    return (state.token)
      ? state.token
      : null
  },
  isLoggedIn: state => {
    return (state && typeof state.token !== 'undefined')
  },
  isSuperUser: state => {
    return (state.role && state.role === 'superuser')
  }
}

/**
 * Vuex Actions
 * @example this.$store.dispatch('userLogin', data)
 */
const actions = {
  userLogout ({ commit }, data) {
    commit('LOGOUT', data)
  },
  userLogin ({ commit }, data) {
    commit('LOGIN', data)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
