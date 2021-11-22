const app = require('express')();

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

module.exports = {
  path: 'api',
  handler: app
}
