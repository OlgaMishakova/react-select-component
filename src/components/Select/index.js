import React, { Component } from 'react';
import './style.styl';

class Select extends Component {
    constructor(props) {
        super(props);

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filterSuggestion = this.filterSuggestion.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.state = {
            isFocused: false,
            listVisible: false,
            value: ''
        };
    }

    handleFocus() {
        this.setState({isFocused: true, listVisible: true})
    };

    handleBlur() {
        this.setState({isFocused: false})
    };

    handleChange(e) {
        this.props.getSuggestions();
        this.setState({value: e.target.value});
    };

    hide() {
        this.setState({listVisible: false});
        document.removeEventListener("click", this.hide);
    }

    show() {
        this.setState({listVisible: true});
        document.addEventListener('click', this.hide);
    }

    filterSuggestion(suggestion) {
        return suggestion.toLowerCase().includes((this.state.value.toLowerCase()));
    }

    renderSuggestions() {
        const sortedSuggestions = this.props.values.slice().filter(this.filterSuggestion).sort();
        return sortedSuggestions.length !== 0
            ? <ul
                className={`field__suggestions ${this.state.listVisible ? "field__suggestions--visible" : "" }`}>
                {sortedSuggestions.map((suggestion, i) => <li key={i}>{suggestion}</li>)}
            </ul>
            : <p>No matches found</p>
    }

    render() {
        return (
            <div onClick={this.show}>
                <div className="field" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                    <input
                        type="text"
                        name="awesome-input"
                        className={this.state.isFocused ? "field__input--focused" : null}
                        onChange={this.handleChange}
                    />
                    <label className="field__placeholder">
                        Выберите, черт возьми, что-нибудь
                    </label>
                </div>
                {this.renderSuggestions()}
            </div>
        )
    }
}

export { Select };
