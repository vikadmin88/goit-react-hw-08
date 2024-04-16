import { createSelector } from "@reduxjs/toolkit";
import {selectNameFilter} from "../filters/selectors.js";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], 
    (contacts, filterTerm) => {
        return contacts.filter(
            contact => contact.name.toLowerCase().includes(filterTerm.toLowerCase())
        );
  });