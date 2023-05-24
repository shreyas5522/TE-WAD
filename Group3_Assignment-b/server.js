// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose')
// // const connectToMongo = require('./config/database.config.js');
// const UserRoute = require('./routes/User') 
// const dbConfig = require('./config/database.config.js');


// mongoose.Promise = global.Promise; 

// mongoose.connect(dbConfig.url).then(() => { 
//     console.log("Databse Connected Successfully!!"); 
// }).catch(err => { 
//     // console.log("Could not connect to the database", err); process.exit(); 
//     console.log("Could not connect to the database" , err); 
//     process.exit(); 
// }); 

// // connectToMongo();

// const app = express();

// app.use('/user',UserRoute);
 
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(bodyParser.json()) 
 

// app.get('/', (req, res) => { 
//     console.log("Inside the get")
//     res.json({"message": "Hello Crud Node Express"});

// });  
  
 
// app.listen(5000, () => { 
//     console.log("Server is listening on port 5000"); 
// }); 





const express = require('express'); 
const dbConfig = require('./config/database.config.js'); 
const bodyParser = require('body-parser'); 
const app = express(); app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json()) 

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
mongoose.connect(dbConfig.url, {
useNewUrlParser: true }).then(() => { 
console.log("Databse Connected Successfully!!"); }).catch(err => { console.log('Could not connect to the database', err); process.exit(); });
 

app.get('/', (req, res) => { res.json({"message": "Hello Crud Node Express"}); }); 
app.listen(3000, () => { console.log("Server is listening on port 3000"); });

const UserRoute = require('./routes/User');
app.use('/user',UserRoute);
