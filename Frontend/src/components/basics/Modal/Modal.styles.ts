import { css } from 'emotion';

function getLabel(label: string) { return `Modal__${label}`; }

export const Root = css({
  width: '100vw',
  height: '100vh',
  background: '#0000004f',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  label: getLabel('Root'),
});

export const Modal = css({
  boxShadow: '1px 1px 4px 1px #393442',
  backgroundColor: 'white',
  borderRadius: 5,
  padding: 15,
  label: getLabel('Modal'),
})

export const Header = css({
  height: 30,
  display: 'flex',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
  label: getLabel('Header'),
});

export const CloseIcon = css({
  height: 10,
  width: 10,
  ':hover': {
    cursor: 'pointer',
  },
  label: getLabel('CloseIcon'),
})
export const Body = css({
  height: 'calc(100% - 60px)',
  label: getLabel('Body'),
});

export const Footer = css({
  height: 30,
  display: 'flex',
  justifyContent: 'flex-end',
  '>button': {
    width: 100,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    outline: 'none',
    borderRadius: 3,
    border: 'none',
    textTransform: 'uppercase',
    ':hover': {
      cursor: 'pointer',
    },
  },
  label: getLabel('Footer'),
});

export const CancelBtn = css({
  backgroundColor: '#acacac',
  color: 'white',
  label: getLabel('CancelBtn'),
})

export const ConfirmBtn = css({
  backgroundColor: '#b6a9f7',
  color: 'white',
  label: getLabel('ConfirmBtn'),
})
