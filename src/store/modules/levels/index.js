const state = {
  levels: [],
};

const getters = {
  getLevels: (state) => state.levels,
};

const actions = {
  addLevel: ({ commit }, payload) => commit("setLevel", payload),
  deleteLevel: ({ commit }, id) => commit("deleteLevel", id),
  editLevel: ({ commit }, payload) => commit("editLevel", payload),
};

const mutations = {
  setLevel: (state, level) => state.levels.push(level),
  deleteLevel(state, id) {
    const index = state.levels.findIndex((x) => x.id == id);
    if (index != -1) state.levels.splice(index, 1);
  },
  editLevel(state, level) {
    const index = state.levels.findIndex((x) => x.id == level.id);
    if (index != -1) state.levels.splice(index, 1, level);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
