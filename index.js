const express = require('express')
const app = express()
require('./db');
const catRoutes = require('./routes/cat');
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/cat',catRoutes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))