import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PlaylistMixer from './PlaylistMixer';
import registerServiceWorker from './registerServiceWorker';

import './css/normalize.css';
import './css/skeleton.css';
import './css/app.css';
import './fonts/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <PlaylistMixer />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
