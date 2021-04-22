const users = require('./routes/users');
const express = require('express');
const app = express();
// app.use(cors());
app.use(express.json());
app.use('/api/users', users);
const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on port ${port}...`));