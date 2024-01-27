import { createSlice } from '@reduxjs/toolkit';


export const itemModalSlice = createSlice({
  name: 'item',
  initialState: {
    item: {},
    isOpen: false
  },
  reducers: {
    openItemModal: (state, action) => {
      state.item = action.payload;
      state.isOpen = true;
    },
    closeItemModal: (state) => {
      state.isOpen = false;
    }
  },
});

export const { openItemModal, closeItemModal } = itemModalSlice.actions;

export default itemModalSlice.reducer;
