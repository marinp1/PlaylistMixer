import * as React from 'react';
import glamorous from 'glamorous';

import { mediaQueries } from '../../styles';

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

const Header = glamorous.div({
  '& h6': {
    fontWeight: 'bold',
    letterSpacing: '0.15rem',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
    borderBottom: '0.1rem solid #bbb',
  },
});

const Link = glamorous.a({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

// tslint:disable max-line-length
const AppInfo = () => (
  <React.Fragment>
    <Container>
      <Header>
        <h6>APPLICATION INFORMATION</h6>
      </Header>
      <div style={{ marginBottom: '4rem' }}>
        <InfoPart>
          <p>
            I created this application in order to combine my own playlists together and play music from different playlists more easily. Since Spotify had killed its desktop API, I had to create a web application. Uses <Link href="https://developer.spotify.com/web-api/">Spotify's Web API</Link> handle requests and the awesome <Link href="http://getskeleton.com/">Skeleton CSS Boilerplate</Link> for initial responsive layout.
          </p>
          <p>
            Initially this application was created a few years ago, but in late 2017 I recreated the application with React + TypeScript in order to be more maintainable and reliable. At the same time I also added a way to resolve duplicate songs from the newly generated playlists, so this can also be used to remove duplicate songs from a single playlist if so desired.
          </p>
          <p>
            Source available at <Link href="https://github.com/marinp1/PlaylistMixer">GitHub</Link>.
          </p>
        </InfoPart>
        <InfoPart>
          <h6>PRIVACY NOTICE</h6>
          <p>
            This application makes API calls client side so no user data is sent to any external servers. Only application's client ID is fetched from server's environment variables. Authorization is handled with <Link href="https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow">implicit grant flow</Link>, meaning that the generated access tokens will be valid only for a short time (~10 minutes).
          </p>
          <p>
            I've however enabled Google analytics for this page for monitoring application usage.
          </p>
        </InfoPart>
      </div>
    </Container>
    <FooterPart>
      <p style={{ color: '#bbb' }}>
        Made with joy by <Link href="https://www.patrikmarin.fi">Patrik Marin</Link>
      </p>
    </FooterPart>
  </React.Fragment>
);

export default AppInfo;
