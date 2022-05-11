import { createSlice } from "@reduxjs/toolkit";
import { QUERY } from "../../utils/constants";

const initialState = {
  collection: [],
  collections: {
    all: [],
    selected: [],
  },
  shownCollection: [],
  params: {
    search: "",
    per: 10,
    page: 0,
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
      // const filter = action.payload.filter || state.params.filter;
      Object.keys(action.payload).forEach((param) => {
        state.params[param] = action.payload[param];
      });
    },
    applyParams: (state) => {
      const { filter, per, page, search } = state.params;

      state.shownCollection = state.collection.length
        ? state.collections[filter].filter(
            (block) =>
              block.title.toLowerCase().includes(search) ||
              block.description.toLowerCase().includes(search)
          )
        : [];
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
      state.collections.selected = state.collections.selected.concat(block);
    },
    removeSelected: (state, action) => {
      const { id } = action.payload;
      state.collections.selected = state.collections.selected.filter(
        (block) => block.id !== id
      );
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

// Thunk function
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
    }, 100)
  );
};
