import React from 'react';
import styles from './Filter.module.scss';
import {connect} from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

const Filter = ({value, onChangeFilter}) => (
  <div>
    <label className={styles.label}>
      Search contacts by name:
      <input
        className={styles.input}
        type="text"
        vlaue={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: state.contacts.filter
})

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
