import { css } from 'emotion';

function getLabel(label: string) { return `OngoingPage__${label}`; }

export const Root = css({
  width: '100vw',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  label: getLabel('Root'),
})
