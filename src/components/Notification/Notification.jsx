import React from 'react';
import PropTypes from 'prop-types';
// import { Section } from '../Section/Section';
import { css } from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <section title="">
      <div className={css.message}>{message}</div>
    </section>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
