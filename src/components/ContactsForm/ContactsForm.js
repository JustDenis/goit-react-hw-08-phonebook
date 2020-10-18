import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import styles from './ContactFrom.module.scss';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import { store } from 'react-notifications-component';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const inputName = event.target.name;
    if (event.target.defaultValue.length > 12) {
      store.addNotification({
        title: 'Error!',
        message: 'Max lenght is 12 symbols!',
        type: 'danger',
        insert: 'bottom',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 2000,
          onScreen: false,
          showIcon: true,
        },
      });
      this.setState(prevState => ({
        [inputName]: prevState[inputName].substring(
          0,
          prevState[inputName].length - 1,
        ),
      }));
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    const isIncludeContact = contacts.some(contact => contact.name === name);

    if (isIncludeContact) {
      this.props.openModal();
      return;
    }

    this.props.onAddContact({ name, number });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label className={styles.label}>
          Number:
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
