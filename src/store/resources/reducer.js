const initialState = {
  resources: [
    {
      id: 1,
      name: "React",
      type: "library",
      tags: ["ui", "jsx", "virtual-dom", "components", "popular"],
      url: "https://reactjs.org",
    },
    {
      id: 2,
      name: "Alpine",
      type: "library",
      tags: ["ui", "vanilla-js", "new"],
      url: "https://github.com/alpinejs/alpine",
    },
    {
      id: 3,
      name: "Zdog",
      type: "library",
      tags: ["3d", "svg", "graphics"],
      url: "https://zzz.dog",
    },
    {
      id: 4,
      name: "AST explorer",
      type: "tool",
      tags: ["babel", "online"],
      url: "https://astexplorer.net",
    },
    {
      id: 5,
      name: "Observable",
      type: "website",
      tags: ["d3", "community", "notebooks", "graphics"],
      url: "https://observablehq.com",
    },

    {
      id: 6,
      name: "unDraw",
      type: "resource",
      tags: ["sketches", "svg", "graphics"],
      url: "https://undraw.co/illustrations",
    },
  ],
  selectedResourceId: null,
};

export default function resourcesSliceReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "SET_SELECTED_RESOURCE_ID": {
      newState.selectedResourceId = action.payload;
      break;
    }
    default: {
      // do nothing
    }
  }

  return newState;
}
