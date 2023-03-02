const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.REACT_APP_PORT || 4000


app.get('/', (req, res) => {
    res.send('API is working...')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


