export const state = () => {
  return {
    pageTitle: "",
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
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title;
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
  }
};
