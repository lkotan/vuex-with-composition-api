const state = {
  persons: [],
};

const getters = {
  getPersons: (state) => state.persons,
  getPerson(state) {
    return (id) => {
      return state.persons.filter((x) => x.id == id)[0];
    };
  },
};

const actions = {
  addPerson: ({ commit }, payload) => commit("setPerson", payload),
  deletePerson: ({ commit }, id) => commit("deletePerson", id),
  editPerson: ({ commit }, payload) => commit("editPerson", payload),
};

const mutations = {
  setPerson: (state, payload) => state.persons.push(payload),
  deletePerson(state, id) {
    const index = state.persons.findIndex((x) => x.id == id);
    if (index != -1) state.persons.splice(index, 1);
  },
  editPerson(state, person) {
    const index = state.persons.findIndex((x) => x.id == person.id);
    if (index != -1) state.persons.splice(index, 1, person);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
