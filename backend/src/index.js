const express = require('express');
const cors = require('cors');
const app = express();

require('./database');

// settings
app.set('port', process.env.PORT || 4500)

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
