import { css } from 'emotion';

function getLabel(label: string) { return `Navbar__${label}`; }

export const Root = css({
  height: '100%',
  width: 150,
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  backgroundColor: '#dcd5ff',
  label: getLabel('Navbar'),
});

export const Item = css({
  width: 150,
  height: 70,
  boxShadow: 'inset -1px -1px 1px 1px #d4d1e6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#dcd5ff',
  color: '#5c538a',
  textTransform: 'uppercase',
  fontSize: 20,
  fontWeight: 'bold',
  ':hover': {
    cursor: 'pointer',
  },
  label: getLabel('Item')
});

export const Current = css({
  backgroundColor: '#5c538a',
  color: '#dcd5ff',
});
