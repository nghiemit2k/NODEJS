require('dotenv').config();
const express = require('express');
const webRouters = require('./routes/web');
const app = express()
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
// config request.body
app.use(express.json()); // Used to parse JSON bodies 
app.use(express.urlencoded()); //Parse URL-encoded bodies 

const configViewEngine = require('./config/viewEngine');
const connection = require('./config/database');
configViewEngine(app);
app.use('/', webRouters)




app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

//test connection
// connection.query(
//     'select * from Users ',
//     function (err, results, fields) {
//         console.log("+++results = ", results);

//     }
// )