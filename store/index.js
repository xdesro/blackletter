export const state = () => {
  return {
    pageTitle: "",
    backgroundText: {
      text: "Summer 2019",
      layout: "horizontal"
    },
    statueRotation: {
      y: 0
    }
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
  }
};
