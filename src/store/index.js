import { createStore } from 'vuex'
import persons from './modules/persons'
import teams from './modules/teams'
import levels from './modules/levels'
import createPersistedState from "vuex-persistedstate";


export default createStore({
  modules: {
    persons,
    teams,
    levels
  },
  plugins: [createPersistedState()],
})