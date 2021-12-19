import React, { Component } from 'react';
import styles from './tempratureInput.module.scss';
class TempratureInput extends Component {
    onChangeFunction(e) {
        this.props.changeTemp(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const labelInner = this.props.type === 'c' ? 'Celsius' : 'Fahrenheit';
        const className = this.props.type === 'c' ? 'celsius' : 'fahrenheit';
        return (
            <div className={styles.formGroup}>
                <label htmlFor={className}>{labelInner}</label>
                <input
                    type="text"
                    name={className}
                    id={className}
                    value={temperature}
                    onChange={this.onChangeFunction.bind(this)}
                />
            </div>
        );
    }
}

export default TempratureInput;
