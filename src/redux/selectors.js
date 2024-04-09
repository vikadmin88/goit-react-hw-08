import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filters.name;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], 
    (contacts, filterTerm) => {
        return contacts.filter(
            contact => contact.name.toLowerCase().includes(filterTerm.toLowerCase())
        );
  });