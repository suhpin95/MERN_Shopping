const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const config = require('config');

app.use(express.json());


const db = config.get('mongoURI');

mongoose
.connect( db, { useNewUrlParser: true,  useUnifiedTopology: true , useCreateIndex: true} ) 
.then( ()=> console.log("connected to Mongo ATLAS..."))
.catch( err=> console.log(err));

app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))