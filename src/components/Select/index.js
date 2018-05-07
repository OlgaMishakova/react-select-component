import React, {Component, Fragment} from 'react';
import { findDOMNode } from 'react-dom';
import './style.styl';

class Select extends Component {
    constructor(props) {
        super(props);

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filterSuggestion = this.filterSuggestion.bind(this);
        this.highlightMatches = this.highlightMatches.bind(this);
        this.onSuggestionClick = this.onSuggestionClick.bind(this);
        this.listDirectionClass = this.listDirectionClass.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.state = {
            isFocused: false,
            listVisible: false,
            value: '',
            directionClass: "field__suggestions--down"
        };
    }

    componentDidMount() {
        this.listDirectionClass();
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
        document.removeEventListener('click', this.hide);
    }

    show() {
        this.setState({listVisible: true});
        document.addEventListener('click', this.hide);
    }

    filterSuggestion(suggestion) {
        return suggestion.toLowerCase().includes((this.state.value.toLowerCase()));
    }

    highlightMatches(suggestion) {
        const { value } = this.state;
        if(value.length !== 0) {
            const start = suggestion.toLowerCase().indexOf(value.toLowerCase());
            const prefix = suggestion.substring(0, start);
            const match = suggestion.substring(start, start + value.length);
            const postfix = suggestion.substring(start + value.length);
            return <Fragment>{prefix}<strong>{match}</strong>{postfix}</Fragment>
        } else {
            return suggestion;
        }
    }

    onSuggestionClick(suggestion) {
        return () =>  this.setState({ value: suggestion });
    }

    listDirectionClass() {
        const node = findDOMNode(this.listElement);
        if (!node) return;
        const windowHeight = window.innerHeight;
        const elementOffset = node.getBoundingClientRect().top + node.clientHeight;
        this.setState({
            directionClass: elementOffset >= windowHeight ? "field--upward" : "field--downward"
        });
    }

    renderSuggestions() {
        const { listVisible } = this.state;

        const sortedSuggestions = this.props.values
            .slice()
            .filter(this.filterSuggestion)
            .sort()
            .map(this.highlightMatches);

        return sortedSuggestions.length !== 0
            ? <ul
                ref={element => (this.listElement = element)}
                className={`field__suggestions ${listVisible ? "field__suggestions--visible" : "" }`}>
                {
                    sortedSuggestions.map((suggestion, i) =>
                        <li className="field__suggestion" key={i} onClick={this.onSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    )
                }
            </ul>
            : <p className={`field__message ${listVisible ? "field__message--visible" : "" }`}>
                Нет совпадений
            </p>
    }

    render() {
        const { isFocused, listVisible, value, directionClass } = this.state;
        return (
            <div
                onClick={this.show}
                className={`field ${listVisible ? "field--list-visible" : "" }  ${directionClass}`}>
                <div className="field__container"
                     onFocus={this.handleFocus}
                     onBlur={this.handleBlur}
                >
                    <input
                        type="text"
                        name="field-input"
                        className={`field__input ${isFocused ? "field__input--focused" : "" }`}
                        onChange={this.handleChange}
                        value={value}
                    />
                    <label
                        className={`field__placeholder ${isFocused || value.length !== 0 ? "field__placeholder--float" : ""}`}>
                        Выберите, черт возьми, что-нибудь
                    </label>
                </div>
                {this.renderSuggestions()}
            </div>
        )
    }
}

export { Select };
