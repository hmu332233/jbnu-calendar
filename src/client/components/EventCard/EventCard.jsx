import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventCard.scss';

import classnames from 'classnames';

import Icon from 'components/Icon';
import { Card } from 'antd-mobile';

const InfoRow = props => (
  <div className={classnames(styles.InfoRow, props.className)}>
    <Icon iconId={props.icon} />
    <span className={styles.InfoRow__text}>{props.text}</span>
  </div>
);

function EventCard(props) {
  return (
    <Card className={classnames(styles.EventCard, props.className)} full>
      <Card.Body>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div>
          <InfoRow
            className={styles.EventCard__info}
            icon="calendar"
            text={props.date}
          />
          <InfoRow
            className={styles.EventCard__info}
            icon="time"
            text={props.time}
          />
          <InfoRow
            className={styles.EventCard__info}
            icon="location"
            text={props.location}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

EventCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string
};
EventCard.defaultProps = {
  title: '열정! 전북대 날개를 달다',
  description: '어쩌구저쩌구 아하하핳',
  location: '전북대학교 삼성문화회관',
  date: '2019.02.11',
  time: '19:17'
};

export default EventCard;
