// Collection-specific Redux logic.
// This slice tracks a user's saved collection items and persists them to localStorage.
// The slice is currently not wired into the store in this project.

import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = {
    // Load saved collection items from localStorage, or start with an empty list.
    items: JSON.parse(localStorage.getItem("collections")) || [],
};

export const collectionSlice = createSlice({
    name: "collections",
    initialState,
    reducers: {
        // Add a new item to the collection if it does not already exist.
        addCollection: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id,
            );



            if (!existingItem) {
                // Add the item to the Redux state.
                state.items.push(action.payload);

                // Persist the updated list to localStorage.
                localStorage.setItem("collections", JSON.stringify(state.items));
            }
        },

        // Remove a collection item by id.
        removeCollection: (state, action) => {
            console.log("here")
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("collections", JSON.stringify(state.items));
        },

        // Clear all saved collection items.
        clearCollection: (state) => {
            state.items = [];
            localStorage.removeItem("collections");
        },

        //add collection toast
        addToast: () => {
            toast.success('Added to collection successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        },

        removedToast: () => {
            toast.success('Removed from the collection successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    },
});

// Export the reducer for use in configureStore when this slice is integrated.
export const { addCollection, removeCollection, clearCollection, addToast, removedToast } = collectionSlice.actions
export default collectionSlice.reducer;

/*
Example action payloads:

store.dispatch(addCollection({
  id: "photo-123",
  title: "Sunset",
  url: "https://example.com/photo-123",
}));

store.dispatch(removeCollection("photo-123"));

store.dispatch(clearCollection());
*/
