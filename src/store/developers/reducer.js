const initialState = {
  developers: [
    {
      id: 1,
      name: "Kelley",
      url: "https://hi-im-kelley.netlify.com",
      favorites: [2, 3, 4, 5],
    },
    {
      id: 2,
      name: "Danny",
      url: null,
      favorites: [1, 2, 6],
    },
    {
      id: 3,
      name: "Irene",
      url: null,
      favorites: [1, 2, 3],
    },
  ],
  selectedDeveloperId: null,
};

export default function developersSliceReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "SET_SELECTED_DEVELOPER_ID": {
      newState.selectedDeveloperId = action.payload;
      break;
    }
    default: {
      // do nothing
    }
  }

  return newState;
}
