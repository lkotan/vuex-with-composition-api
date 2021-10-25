const state = {
  teams: [],
};

const getters = {
  getTeams: (state) => state.teams,
};

const actions = {
  addTeam: ({ commit }, payload) => commit("setTeam", payload),
  deleteTeam: ({ commit }, id) => commit("deleteTeam", id),
  editTeam: ({ commit }, payload) => commit("editTeam", payload),
};

const mutations = {
  setTeam: (state, team) => state.teams.push(team),
  deleteTeam(state, id) {
    const index = state.teams.findIndex((x) => x.id == id);
    if (index != -1) state.teams.splice(index, 1);
  },
  editTeam(state,team){
    const index = state.teams.findIndex((x) => x.id == team.id);
    if (index != -1) state.teams.splice(index, 1,team);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
