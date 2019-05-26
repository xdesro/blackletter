import createPersistedState from "vuex-persistedstate";
export default ({ store }) => {
  window.onNuxtReady(() => {
    const state = localStorage.getItem("vuex");
    const JSONstate = JSON.parse(state);
    delete JSONstate.pageNumber;
    delete JSONstate.pageTitle;
    delete JSONstate.backgroundText;
    localStorage.setItem("vuex", JSON.stringify(JSONstate));
    createPersistedState()(store);
  });
};
