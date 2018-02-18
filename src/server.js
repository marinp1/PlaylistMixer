require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
if (!CLIENT_ID) {
  throw new Error('CLIENT ID NOT SET!');
}

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/build')));

// Obviously not secure as the id is sent as plaintext
// but at least client id is parametrised
app.post('/api/authenticate', (req, res) => {
  if (!CLIENT_ID) {
    res.status(404).send('Client id not found');
  }
  res.status(200).send(CLIENT_ID);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
