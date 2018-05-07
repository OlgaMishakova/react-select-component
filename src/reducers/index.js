import { initialState } from "../index";

export function retrieveSuggestions (state = initialState, action) {
    if (action.type ==='GET_SUGGESTIONS') {
        return state;
    }
}
