import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./PopupSlice"; 
import { PopupModel } from "../Models/PopupModel";

// Define the global state structure
export type RootState = {
    popup: {
        activePopups: PopupModel[];
    };
};

// Create the store with middleware adjustments
export const store = configureStore({
    reducer: {
        popup: popupReducer, // Use the reducer directly
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["popup/openPopup"],
                ignoredPaths: ["popup.activePopups.content"],
            },
        }),
});

export type AppDispatch = typeof store.dispatch;
