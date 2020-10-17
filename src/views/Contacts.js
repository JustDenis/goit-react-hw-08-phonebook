import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';

import { store } from 'react-notifications-component';
import { CSSTransition } from 'react-transition-group';
import styles from './styles/App.module.css';
import NotificationTransition from '../components/Notification/transitions/NotificationTransition.module.css';
import FromSectionTransition from '../components/ContactsForm/transitions/FormSectionTransitions.module.scss';
import ContactsSectionTransition from '../components/ContactsList/transitions/ContactsSectionTransition.module.css';
import LoaderTransition from '../components/Loader/transitions/LoaderTransition.module.css';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

class Contacts extends Component {
  state = {
    isOpenModal: false,
  };

  componentDidMount() {
    const {contacts, onFetchContacts} = this.props;

    if(contacts.length > 0){
      return
    }

    onFetchContacts();
  }

  handleOpenModal = () => {
    store.addNotification({
      title: "Error!",
      message: "Contact already exist!",
      type: "danger",
      insert: "bottom",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: false,
        showIcon: true
      }
    });
  };

  render() {
    const { isOpenModal } = this.state;
    const { contacts, isLoadingContacts } = this.props;

    const isRenderContacts = contacts.length > 0;

    return (
      <section>
        <CSSTransition
          in={true}
          appear={true}
          classNames={FromSectionTransition}
          timeout={250}
          unmountOnExit
        >
          <section>
          <h2 className={styles.title}>Phonebook</h2>
          <section className={styles.section}>
            <ContactForm openModal={this.handleOpenModal} />
          </section>
          </section>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          classNames={ContactsSectionTransition}
          timeout={250}
        >
          <section>
            <h2 className={styles.title}>Contacts</h2>
            {isRenderContacts ? (
              <section className={styles.section}>
                <Filter />
                <ContactsList />
              </section>
            ) : (
              <h2>Your phonebook is empty.</h2>
            )}
          </section>
        </CSSTransition>

        <CSSTransition
          in={isLoadingContacts}
          appear={true}
          classNames={LoaderTransition}
          timeout={150}
          unmountOnExit
        >
          <Loader />
        </CSSTransition>
        <CSSTransition
          in={isOpenModal}
          appear={true}
          classNames={NotificationTransition}
          timeout={250}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
