import React, { Component } from 'react';
import './style.styl';

class Select extends Component {
    constructor(){
        super();
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            isFocused: false
        };
    }

    handleFocus() {
        this.setState({
            isFocused: true
        })
    };

    handleBlur() {
        this.setState({
            isFocused: false
        })
    };

    render() {
        return(
            <div>
                <div className="field" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                    <input type="text" name="awesome-input" className={this.state.isFocused && "field__input--focused"}/>
                    <label className="field__placeholder">Выберите, черт возьми, что-нибудь</label>
                </div>
                    <ul>
                        <li>Люк</li>
                        <li>Лея</li>
                        <li>Оби-Ван</li>
                        <li>Квай-Гон</li>
                        <li>Магистр Йода</li>
                        <li>Дарт Вейдер</li>
                        <li>Дарт Сидиус</li>
                    </ul>
            </div>
        )
    }
}

export { Select };
