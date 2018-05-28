const state = {
  account: {}
}

const mutations = {
  LOGIN (state, data) {
    state.account = data
  },
  LOGOUT (state, data) {
    state.account = {}
  }
}

/**
 * Vuex Actions
 * @example this.$store.getters.getUserFullName()
 */
const getters = {
  getUserAccount: state => {
    return state.account
  },
  getUserFullName: state => {
    return (state.account.first_name && state.account.last_name)
      ? `${state.account.first_name} ${state.account.last_name}`
      : null
  },
  getUserEmail: state => {
    return (state.account.email)
      ? state.account.email
      : null
  },
  getUserRole: state => {
    return (state.account.role)
      ? state.account.role
      : null
  },
  getUserToken: state => {
    return (state.account.token)
      ? state.account.token
      : null
  },
  isLoggedIn: state => {
    return (typeof state.account.token !== 'undefined')
  },
  isSuperUser: state => {
    return (state.account.role && state.account.role === 'superuser')
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
