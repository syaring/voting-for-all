import * as React from 'react';

import closeIcon from '../../../img/icon-x.png';

import * as styles from './Modal.styles';

type ModalPropsType = {
  title: string;
  width: number;
  height: number;
  children: React.ReactNode;
  onConfirm?(): void;
  onClose?(): void;
}

export default function Modal({
  title,
  width,
  height,
  children,
  onConfirm,
  onClose,
}: ModalPropsType) {
  return (
    <div className={styles.Root}>
      <div
        className={styles.Modal}
        style={{ width, height }}
      >
        <div className={styles.Header}>
          <span>
            {title}
          </span>
          <img
            className={styles.CloseIcon}
            alt='close icon'
            src={closeIcon}
          />
        </div>
        <div className={styles.Body}>
          {children}
        </div>
        <div className={styles.Footer}>
          <button
            className={styles.CancelBtn}
            onClick={onClose}
          >
            <span>cancel</span>
          </button>
          <button
            className={styles.ConfirmBtn}
            onClick={onConfirm}
          >
            <span>ok</span>
          </button>
        </div>
      </div>
    </div>
  );
}
