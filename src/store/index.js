import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "123abc", name: "venkata Karamsetty" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false },
    ],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
  },
  modules: {},
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    getEventById: (state) => (id) => {
      return state.todos.find((event) => event.id === id);
    },
    activeTodosCount: (state) => {
      return state.todos.filter((todo) => !todo.done).length;
    },
    // Another way of doing using normal logic
    // activeTodosCount: (state, getters) => {
    //   return state.todos.length - getters.doneTodos.length
    // }
  },
});
