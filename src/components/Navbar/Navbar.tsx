import { cx } from 'emotion';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as styles from './Navbar.styles';

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();

  const { pathname } = location;

  return (
    <nav className={styles.Root}>
      <li
        onClick={() => history.push('/')}
        className={cx(
          styles.Item,
          pathname === '/' && styles.Current,
        )}
      >
        <span>🗳 home</span>
      </li>
      <li
        onClick={() => history.push('/closed')}
        className={cx(
          styles.Item,
          pathname === '/closed' && styles.Current,
        )}
      >
        <span>🔒 closed</span>
      </li>
      <li
        onClick={() => history.push('/my-vote')}
        className={cx(
          styles.Item,
          pathname === '/my-vote' && styles.Current,
        )}
      >
        <span>my vote</span>
      </li>
    </nav>
  );
}
