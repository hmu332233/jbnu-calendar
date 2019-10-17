import React from 'react';
import PropTypes from 'prop-types';
import styles from './Calendar.scss';

import classnames from 'classnames';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Calendar(props) {
  return (
    <div className={styles.Calendar}>
      <div className={styles.Calendar__header}>
        <button>
          <FaAngleLeft />
        </button>
        <span className={styles.Calendar__header__title}>December 2019</span>
        <button>
          <FaAngleRight />
        </button>
      </div>
      <div className={styles.Calendar__body}>
        <div className={styles.row}>
          <div className={styles.box}>
            <span className={styles.text}>Sun</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>Mon</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>Tue</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>Wen</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>Thu</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>Fri</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>Sat</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.box}>
            <span className={styles.text}>28</span>
            <span className={styles.events}>
             <div className={classnames(styles.event, styles.color1)}>
                얌얌얌
              </div>
              <div className={classnames(styles.event, styles.color2)}>
                얌얌얌
              </div>
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>29</span>
            <span className={styles.events}>
              <div className={classnames(styles.event, styles.color2)}>
                얌얌얌
              </div>
            
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>30</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>31</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>1</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>2</span>
          </div>
          <div className={styles.box}>
            <span className={styles.text}>3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Calendar.propTypes = {};
Calendar.defaultProps = {};

export default Calendar;
