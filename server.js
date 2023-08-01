const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');

const app = express();
const port = 3000;

// Dummy OAuth2 credentials - replace with your actual credentials
const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URL'
);

// Dummy token - replace with the actual token obtained from the OAuth2 flow
oauth2Client.setCredentials({
  access_token: 'YOUR_ACCESS_TOKEN',
});

const analytics = google.analytics({
  version: 'v3',
  auth: oauth2Client,
});

app.get('/export', (req, res) => {
  analytics.data.ga.get(
    {
      'ids': 'ga:YOUR_VIEW_ID',
      'start-date': '30daysAgo',
      'end-date': 'today',
      'metrics': 'ga:sessions,ga:users',
    },
    (err, response) => {
      if (err) {
        console.log(err);
        return res.status(500).send('An error occurred');
      }

      fs.writeFile('analyticsData.json', JSON.stringify(response.data), (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send('An error occurred');
        }

        res.send('Data exported successfully');
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
