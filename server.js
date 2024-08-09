const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
app.use(cors());

app.get('/api/vehicle-location', (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
