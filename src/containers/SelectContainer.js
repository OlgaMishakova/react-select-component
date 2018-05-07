import React from 'react';
import { connect } from "react-redux";
import { Select } from "../components/Select";
import { getSuggestionsList } from "../actions";
import { initialState } from "../index";

const mapDispatchToProps = dispatch => {
    return {getSuggestions: () => dispatch(getSuggestionsList())}
};

const mapStateToProps = (state = initialState) => ({ values: state.suggestions });

export const SelectContainer = connect(mapStateToProps, mapDispatchToProps)(Select);
