import React from 'react';
import PropTypes from 'prop-types';
import { css } from './Section.module.css';

const Section = ({ title = '', children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
