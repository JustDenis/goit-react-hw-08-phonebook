import React, { Component } from 'react';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBackspace } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/Keypad.module.scss';

class Keypad extends Component {
  state = {
    number: '',
  };

  handleKeyboardClick = e => {
    const { value } = e.target.dataset;
    console.log(value);

    this.setState(prevState => ({ number: prevState.number + value }));
  };

  handleDeleteSymbol = () => {
    this.setState(prevState => ({
      number: prevState.number.substr(0, prevState.number.length - 1),
    }));
  };

  render() {
    const { number } = this.state;
    return (
      <section className={styles.keypad}>
        <h2 className={styles.keypadTitle}>Type a number:</h2>
        <section className={styles.keypadInputSection}>
          <span
            className={styles.keypadInputSectionDelete}
            onClick={this.handleDeleteSymbol}
          >
            <FontAwesomeIcon icon={faBackspace} />
          </span>
          <input
            className={styles.keypadInput}
            type="text"
            defaultValue={number}
          />
          <a className={styles.keypadPhoneButton} href={`tel:${number}`}>
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </section>
        <ul className={styles.keypadNumbers}>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="1"
          >
            1
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="2"
          >
            2
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="3"
          >
            3
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="4"
          >
            4
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="5"
          >
            5
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="6"
          >
            6
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="7"
          >
            7
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="8"
          >
            8
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="9"
          >
            9
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="*"
          >
            *
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="0"
          >
            0
          </li>
          <li
            className={styles.keypadNumbersItem}
            onClick={this.handleKeyboardClick}
            data-value="#"
          >
            #
          </li>
        </ul>
      </section>
    );
  }
}

export default Keypad;
