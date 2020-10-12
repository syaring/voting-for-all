import { css } from 'emotion';
function getLabel(label: string) { return `VoteCard__${label}`; }

export const Root = css({
  boxShadow: '1px 1px 5px 0px #868686',
  width: 250,
  height: 350,
  margin: 20,
  fontFamily: 'NanumGothic',
  '@media (max-width: 750px)': {
    width: 200,
  },
  label: getLabel('Root'),
});

export const Thumbnail = css({
  position: 'relative',
  width: '100%',
  '>img': {
    width: '100%',
  },
  label: getLabel('Thumbnail'),
});

export const Title = css({
  margin: 10,
  fontFamily: 'Ultra',
  display: 'flex',
  justifyContent: 'center',
  label: getLabel('Title'),
})

export const UserInfo = css({
  margin: 10,
  display: 'flex',
  alignItems: 'center',
  label: getLabel('UserInfo'),
});

export const ProfileImg = css({
  width: 20,
  marginRight: 15,
  borderRadius: 15,
  label: getLabel('ProfileImg'),
});

export const VoteInfo = css({
  margin: 10,
  display: 'flex',
  fontSize: 12,
  justifyContent: 'space-between',
  '@media (max-width: 750px)': {
    flexDirection: 'column',
  },
  label: getLabel('VoteInfo'),
});