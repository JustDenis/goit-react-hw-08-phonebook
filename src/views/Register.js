import React, { Component } from 'react';
import styles from './styles/Auth.module.scss';
import authOperations from '../redux/auth/authOperations';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { store } from 'react-notifications-component';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if(this.state.password.length < 7){
      store.addNotification({
        title: "Error!",
        message: "Minimal password length is 7!",
        type: "danger",
        insert: "bottom",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: false,
          showIcon: true
        }
      });
      this.setState({password: ''})
      return;
    }

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <Link to="/" className={styles.authArrowBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <section className={styles.authContainer}>
          <h2 className={styles.authTitle}>Registration</h2>
          <form className={styles.authForm} onSubmit={this.handleFormSubmit}>
            <label className={styles.authLabel}>
              Name:
              <input
                className={styles.authInput}
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label className={styles.authLabel}>
              Email:
              <input
                className={styles.authInput}
                type="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label className={styles.authLabel}>
              Password:
              <input
                className={styles.authInput}
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <button type="submit" className={styles.authButton}>
              Sign Up
            </button>
          </form>
          <span className={styles.authHint}>
            Already Registered?
            <Link className={styles.authHintLink} to="/login">
              Sign in
            </Link>
            !
          </span>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
