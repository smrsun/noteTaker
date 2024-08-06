const express = require('express');
const notes = require('./routes/notes.js');
const index = require('./routes/index.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', notes);
app.use('/api', index)



app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
