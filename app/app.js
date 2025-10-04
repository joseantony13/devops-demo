// simple express app, exports app for tests
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from DevOps Pipeline!'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

if (require.main === module) {
  app.listen(port, () => console.log(`App listening on ${port}`));
}

module.exports = app;
