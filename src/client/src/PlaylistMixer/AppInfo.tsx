import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import { mediaQueries } from './styles';

const Container = glamorous.div({
  background: 'whitesmoke',
  border: '2rem solid whitesmoke',
  boxSizing: 'border-box', 
  position: 'static',
  bottom: 0,
  marginTop: '8rem',

  [mediaQueries.tablet]: {
    width: '380px',
    overflow: 'auto',
    position: 'absolute',
    marginTop: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },

});

const InfoPart = glamorous.div({
  '& h6': {
    fontWeight: 'bold',
    letterSpacing: '0.15rem',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
    borderBottom: '0.1rem solid #bbb',
  },
  '& p': {
    marginBottom: '0.5rem',
    textAlign: 'justify',
  },
  marginBottom: '1.5rem',
});

const FooterPart = glamorous.div({
  paddingTop: '1rem',
  paddingBottom: '1rem',
  '& p': {
    textAlign: 'center',
    margin: 0,
  },
  width: '100%',
  position: 'fixed',
  bottom: 0,
  background: 'whitesmoke',
  [mediaQueries.tablet]: {
    width: '380px',
    position: 'absolute',
    right: 0,
  },

});

const buttonStyles = css({
  position: 'absolute',
  right: 0,
  top: 0,
  ':hover': {
    cursor: 'pointer',
    opacity: '0.7',
  },
  [mediaQueries.tablet]: {
    display: 'none !important',
  },
});

const Header = glamorous.div({
  '& h6': {
    fontWeight: 'bold',
    letterSpacing: '0.15rem',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
    borderBottom: '0.1rem solid #bbb',
  },
});

// tslint:disable max-line-length
const AppInfo: React.SFC<{visibility: boolean, closeInfo: () => void}> = ({ visibility, closeInfo }) => {

  return (
    <div>
    <Container>
      <Header>
        <i { ...buttonStyles} className="fa fa-times fa-lg" aria-hidden="true" onClick={e => closeInfo()}></i>
        <h6>APPLICATION INFORMATION</h6>
      </Header>
      <div style={{ marginBottom: '4rem' }}>
        <InfoPart>
          <p>
            I created this application in order to combine my own playlists together and play music from different playlists more easily. Since Spotify had killed its desktop API, I had to create a web application. Uses <a href="https://developer.spotify.com/web-api/">Spotify's Web API</a> and the awesome <a href="http://getskeleton.com/">Skeleton CSS Boilerplate</a> for initial responsive layout.
          </p>
          <p>
            Initially this application was created a few years ago, but in late 2017 I recreated the application with React + TypeScript in order to be more maintainable and reliable. At the same time I also added a way to resolve duplicate songs from the newly generated playlists, so this can also be used to remove duplicate songs from a single playlist if so desired.
          </p>
          <p>
            Source available at <a href="https://github.com/marinp1/PlaylistMixer">GitHub</a>.
          </p>
        </InfoPart>
        <InfoPart>
          <h6>PRIVACY NOTICE</h6>
          <p>
            This application makes API calls client side so no user data is sent to any external servers. Only application's client ID is fetched from server's environment variables.
          </p>
          <p>
            I've however enabled Google analytics for this page for monitoring application usage.
          </p>
          <p>
            There's no HTTPS connection for the application from <a href="http://www.playlistmixer.patrikmarin.fi">http://www.playlistmixer.patrikmarin.fi</a> because SSL certificates for custom domains are simply expensive. For HTTPS enabled site, visit the app's <a href="https://spotify-playlistmixer.herokuapp.com">Heroku URL</a>.
          </p>
        </InfoPart>
      </div>
    </Container>
    <FooterPart>
      <p style={{ color: '#bbb' }}>
        Made with joy by <a href="https://www.patrikmarin.fi">Patrik Marin</a>
      </p>
    </FooterPart>
    </div>
  );
};

export default AppInfo;
