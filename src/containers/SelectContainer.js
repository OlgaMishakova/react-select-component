import React from 'react';
import { connect } from "react-redux";
import { Select } from "../components/Select";
import { getFilteredSuggestions } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {getSuggestions: value => dispatch(getFilteredSuggestions(value))}
};

const mapStateToProps = state => {
    return {...state};
};

export const SelectContainer = connect(mapStateToProps, mapDispatchToProps)(Select);
