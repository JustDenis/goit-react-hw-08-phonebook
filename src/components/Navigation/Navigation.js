import React from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li key="keypad" className={styles.navListItem}>
          <NavLink to="/keypad" activeClassName={styles.activeNavLink}>
          <FontAwesomeIcon icon={faPhoneAlt} className={styles.navListItemIcon}/>
            <span className={styles.navListType}>Keypad</span>
          </NavLink>
        </li>
        <li key="contacts" className={styles.navListItem}>
          <NavLink to="/contacts" activeClassName={styles.activeNavLink}>
          <FontAwesomeIcon icon={faUserFriends} className={styles.navListItemIcon}/>
            <span className={styles.navListType}>Contacts</span>
          </NavLink>
        </li>
        <li key="profile" className={styles.navListItem}>
          <NavLink to="/profile" exact activeClassName={styles.activeNavLink}>
          <FontAwesomeIcon icon={faHome} className={styles.navListItemIcon}/>
            <span className={styles.navListType}>Profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
