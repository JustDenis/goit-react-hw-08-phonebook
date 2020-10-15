import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactsListItem.module.scss';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

function ContactListItem({ name, number, onRemove }) {
  return (
    <li className={styles.item}>
      <span className={styles.span}>
        {name}: {number}
      </span>
      <section>
      <a href={`tel:${number}`} className={styles.telLink}>
        <FontAwesomeIcon icon={faPhoneSquare}/>
      </a>
      <button className={styles.button} type="button" onClick={onRemove}>
        X
      </button>
      </section>
    </li>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...contactsSelectors.getContact(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
