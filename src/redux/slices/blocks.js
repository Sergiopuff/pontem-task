import { createSlice } from "@reduxjs/toolkit";
import { QUERY } from "../../utils/constants";

const initialState = {
  collection: [],
  selected: [],
  shownCollection: [],
  filters: ["all", "selected"],
  params: {
    search: "",
    filter: "all",
  },
  isLoading: false,
  error: null,
};

export const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    changeParams: (state, action) => {
      Object.keys(action.payload).forEach((param) => {
        state.params[param] = action.payload[param];
      });
    },
    applyParams: (state) => {
      const { search, filter } = state.params;

      const filteredCollection =
        filter === "all" ? [...state.collection] : [...state.selected];

      state.shownCollection = filteredCollection.filter(
        (block) =>
          block.title.toLowerCase().includes(search) ||
          block.description.toLowerCase().includes(search)
      );
    },
    blocksRequested: (state) => {
      state.isLoading = true;
    },
    blocksSucceeded: (state, action) => {
      const { blocks } = action.payload;
      state.collection = blocks;
      state.shownCollection = blocks;
      state.isLoading = false;
      state.error = null;
    },
    blocksFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    setSelected: (state, action) => {
      const { block } = action.payload;
      state.selected = state.selected.concat(block);
    },
    removeSelected: (state, action) => {
      const { id } = action.payload;
      state.selected = state.selected.filter((block) => block.id !== id);
    },
  },
});

export const {
  changeParams,
  blocksRequested,
  blocksSucceeded,
  blocksFailed,
  setSelected,
  removeSelected,
  applyParams,
} = blocksSlice.actions;

export default blocksSlice.reducer;

// Thunk functions
export const fetchBlocks = () => async (dispatch) => {
  dispatch(blocksRequested());
  await fetch(QUERY)
    .then((response) => response.json())
    .then((data) => {
      dispatch(blocksSucceeded({ blocks: data }));
    })
    .catch((error) => dispatch(blocksFailed({ error })));
};

export const renderData = (params) => async (dispatch) => {
  dispatch(changeParams(params));
  await new Promise(() =>
    setTimeout(() => {
      dispatch(applyParams());
    }, 300)
  );
};
