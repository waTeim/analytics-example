/**
 * @api {get} /uniqueUsers Request Unique Users data
 * @apiName GetUniqueUsers
 * @apiGroup GoogleAnalytics
 *
 * @apiSuccess {String} message Unique users data exported successfully.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "Unique users data exported successfully"
 *
 * @apiError {String} error An error occurred.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     "An error occurred"
 *
 * @apiDescription This endpoint exports the total number of unique users for 
 * the past 30 days. To use this endpoint, start the server with `node server.js` 
 * and access the endpoint at `http://localhost:3000/uniqueUsers`. The data will 
 * be exported as a JSON file named 'uniqueUsersData.json' in the server's 
 * directory.
 * 
 * Please replace 'ga:YOUR_VIEW_ID' with your actual Google Analytics view ID.
 */
app.get('/uniqueUsers', (req, res) => {
  analytics.data.ga.get(
    {
      'ids': 'ga:YOUR_VIEW_ID',
      'start-date': '30daysAgo',
      'end-date': 'today',
      'metrics': 'ga:users',
    },
    (err, response) => {
      if (err) {
        console.log(err);
        return res.status(500).send('An error occurred');
      }

      fs.writeFile('uniqueUsersData.json', JSON.stringify(response.data), (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send('An error occurred');
        }

        res.send('Unique users data exported successfully');
      });
    }
  );
});
