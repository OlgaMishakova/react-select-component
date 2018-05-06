import React from 'react';
import { connect } from "react-redux";
import { Select } from "../components/Select";
import { getSuggestionsList } from "../actions";

const mapDispatchToProps = dispatch => {
    return {getSuggestions: () => dispatch(getSuggestionsList())}
};

const mapStateToProps = (state = {}) => state;

export const SelectContainer = connect(mapStateToProps, mapDispatchToProps)(Select);
