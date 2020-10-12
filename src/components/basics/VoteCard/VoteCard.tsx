import * as React from 'react';

import profilePlaceholder from '../../../styles/img/img-profile-placeholder.png';
import { formatDate } from '../../../utils/formatDate';

import * as styles from './VoteCard.styles';

type VoteCardPropsType = {
  id: string;
  title: string;
  author: string;
  profile?: string;
  startDate: string;
  dueDate: string;
  participants: number;
  thumbNail: string;
}

export default function VoteCard({
  id,
  title,
  author,
  profile,
  startDate,
  dueDate,
  participants,
  thumbNail,
}: VoteCardPropsType) {
  return (
    <div className={styles.Root}>
      <div className={styles.Thumbnail}>
        <img src={thumbNail} />
      </div>
      <div className={styles.Title}>
        <span>{title}</span>
      </div>
      <div className={styles.UserInfo}>
        <img
          className={styles.ProfileImg}
          alt='profile image'
          src={profile ?? profilePlaceholder}
        />
        <span>{author}</span>
      </div>
      <div className={styles.VoteInfo}>
        <span>
          {formatDate(dueDate)} 까지
        </span>
        <span>{participants}명 참여중</span>
      </div>
    </div>
  );
}
