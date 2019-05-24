export const state = () => {
  return {
    pageTitle: "",
    pageNumber: 0,
    darkMode: false,
    backgroundText: {
      text: "Summer 2019",
      layout: "horizontal"
    },
    statueRotation: {
      y: 0
    },
    navAlignTop: false
  };
};

export const mutations = {
  SET_PAGE_TITLE(state, pageTitle) {
    state.pageTitle = pageTitle;
  },
  SET_PAGE_NUMBER(state, pageNumber) {
    state.pageNumber = pageNumber;
  },
  SET_BACKGROUND_TEXT(state, backgroundSettings) {
    state.backgroundText = {
      text: backgroundSettings[0],
      layout: backgroundSettings[1]
    };
  },
  SET_STATUE_ROTATION(state, rotation) {
    state.statueRotation.y = rotation;
  },
  SET_NAV_ALIGNMENT(state, alignment) {
    state.navAlignTop = alignment;
  },
  TOGGLE_COLOR_MODE(state) {
    state.darkMode = !state.darkMode;
    // localStorage.setItem("darkMode", state.darkMode);
  }
};
