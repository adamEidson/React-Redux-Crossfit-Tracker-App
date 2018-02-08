import express from 'express';
import mysql from 'mysql';


const app = express();
const dbUrl = 'localhost';


var MysqlConnection = mysql.createConnection({
    host: dbUrl,
    user: 'aeidson',
    password: 'R0ckyMtnH1gh!',
    database: 'crossfittracker'
});


MysqlConnection.connect(function(error) {
if(!!error) {
    console.log('Connection Error');
} else      {
    console.log('Connected');
}
});

app.get('/', function(req, resp) {
    //about mysql
    MysqlConnection.query("Select * From crossfittracker.Wods", function(error, rows, fields) {
    if(!!error) {
        console.log('Error in the query');
    } else {
        //parse fields as needed 
        console.log('successful query');
    }
});
})

 

app.listen(8080, () => console.log ('Server is running on localhost: 8080'));

