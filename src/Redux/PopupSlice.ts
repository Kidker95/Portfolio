import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopupModel } from "../Models/PopupModel";

// Define the state structure for the popup slice
interface PopupState {
    activePopups: PopupModel[];
}

// Initialize the state
const initialState: PopupState = {
    activePopups: [],
};

export const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<PopupModel>) => {
            state.activePopups.push(action.payload);
        },
        closePopup: (state, action: PayloadAction<string>) => {
            state.activePopups = state.activePopups.filter((popup) => popup.title !== action.payload);
        },
    },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
