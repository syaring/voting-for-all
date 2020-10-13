import { css } from 'emotion';

function getLabel(label: string) { return `App__${label}`; }

export const Root = css({
  backgroundColor: 'white',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '150px auto',
  label: getLabel('Root'),
});
