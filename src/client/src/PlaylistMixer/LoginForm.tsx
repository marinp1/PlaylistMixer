import * as React from 'react';
import glamorous from 'glamorous';

import { mediaQueries } from './styles';

import AppInfo from './AppInfo';

const SCOPES = ['user-read-private',
  'playlist-read-private', 'playlist-read-collaborative',
  'playlist-modify-public', 'playlist-modify-private',
];

function generateRandomString(length: number) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let s = '';
  for (let i = 0; i < length; i = i + 1) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    s += chars[randomIndex];
  }
  return s;
}

async function login(redirectUri: string) {
  const response = await fetch('/api/authenticate', { method: 'post' });
  const clientId = await response.text();

  const state = generateRandomString(15);
  const url = 'https://accounts.spotify.com/authorize?client_id=' + clientId +
		'&response_type=token' +
		'&scope=' + encodeURIComponent(SCOPES.join(' ')) +
		'&redirect_uri=' + encodeURIComponent(redirectUri) +
		'&state=' + state;
  window.location.replace(url);
}

const LoginContainer = glamorous.div({
  marginTop: '6rem',
  [mediaQueries.tablet]: {
    marginTop: '20rem',
  },
});

const Title = glamorous.h3({
  letterSpacing: '0.15rem',
  fontWeight: 300,
  color: '#f5f5f5',
});

const Subtitle = glamorous.h5({
  color: '#A1A1A1',
});

const LoginButton = glamorous.img({
  height: 'auto',
  width: '200px',
  cursor: 'pointer',
});

const LoginForm: React.SFC<{ redirectUri: string }> = ({ redirectUri }) => (
  <React.Fragment>
    <div className="container">
      <LoginContainer>
        <Title>PLAYLISTMIXER</Title>
        <Subtitle>A Spotify web application</Subtitle>
        <LoginButton src={require('./images/log_in-desktop-large.png')}
          onClick={e => login(redirectUri)}/>
      </LoginContainer>
    </div>
    <AppInfo/>
  </React.Fragment>
);

export default LoginForm;
