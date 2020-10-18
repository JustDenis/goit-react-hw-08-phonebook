import React from 'react';
import Spinner from 'react-loader-spinner';
import styles from './Loader.module.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (<div className={styles.overlay}>
      <Spinner className={styles.spinnerCenter} type="ThreeDots" color="#00BFFF" height={80} width={80} />
  </div>);
};

export default Loader;
