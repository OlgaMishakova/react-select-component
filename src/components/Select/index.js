import React, { Component } from 'react';
import './style.styl';

class Select extends Component {
    constructor(props){
        super(props);

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.state = {
            isFocused: false,
            listVisible: false
        };
    }

    handleFocus() {
        this.setState({ isFocused: true, listVisible: true })
    };

    handleBlur() {
        this.setState({ isFocused: false })
    };

    handleChange() {
        this.props.getSuggestions(value);
    };

    hide() {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    }

    show() {
        this.setState({ listVisible: true });
        document.addEventListener('click', this.hide);
    }

    render() {
        const sortedSuggestions = this.props.values.slice().sort();
        return(
            <div onClick={this.show}>
                <div className="field" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                    <input
                        type="text"
                        name="awesome-input"
                        className={this.state.isFocused ? "field__input--focused" : null}
                    />
                    <label className="field__placeholder">
                        Выберите, черт возьми, что-нибудь
                    </label>
                </div>
                    <ul className={`field__suggestions ${this.state.listVisible ? "field__suggestions--visible" : "" }`}>
                        {sortedSuggestions.map((suggestion, i) => (<li key={i}>{suggestion}</li>))}
                    </ul>
            </div>
        )
    }
}

export { Select };
