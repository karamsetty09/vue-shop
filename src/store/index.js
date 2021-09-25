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
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          console.log("There was an error:" + error.response);
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
