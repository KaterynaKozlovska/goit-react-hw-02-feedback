import React from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section';
import { css } from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Section title="Statistics">
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item__general}>Total: {total}</li>
        <li className={css.item__general}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
