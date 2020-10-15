import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from "../../redux/auth/authOperations";
import styles from './UserMenu.module.scss';

const UserMenu = ({ userName, onLogout }) => {
  return (
    <section className={styles.userMenuContainer}> 
      <span className={styles.userMenuGreeting}>Hello, {userName}</span>
      <button className={styles.userMenuButton} type="button" onClick={onLogout}>LogOut</button>
    </section>
  );
};

const mapStateToProps = state => ({
  userName: authSelectors.userName(state),
});

const mapDispatchToProps = {
    onLogout: authOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
