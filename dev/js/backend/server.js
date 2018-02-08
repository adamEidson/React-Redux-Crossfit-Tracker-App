import express from 'express';
import mysql from 'mysql';


const app = express();
const dbUrl = 'localhost';


var MysqlConnection = mysql.createConnection({
    connectionLimit: 50,
    host: dbUrl,
    user: 'aeidson',
    password: 'R0@st3d',
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
    MysqlConnection.query("Select * From crossfittracker.Wod", function(error, rows, fields) {
    if(!!error) {
        console.log('Error in the query');
    } else {
        //parse fields as needed 
        console.log('successful query');
        console.log(rows[2]);
        console.log(rows[2].WORKOUT_NAME);
        resp.send('Wod results ' + rows[0].WORKOUT_NAME);
    }
});
})

 

app.listen(8080, () => console.log ('Server is running on localhost: 8080'));

