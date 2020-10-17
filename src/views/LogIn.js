import React, { Component } from 'react';
import styles from './styles/Auth.module.scss';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/authOperations';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Link to="/" className={styles.authArrowBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <section className={styles.authContainer}>
          <h2 className={styles.authTitle}>Sign In</h2>
          <form className={styles.authForm} onSubmit={this.handleFormSubmit}>
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
              Sign In
            </button>
          </form>
          <span className={styles.authHint}>
            Not registered yet?
            <Link className={styles.authHintLink} to="/register">
              Register
            </Link>
            now!
          </span>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LogIn);
