import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
/* *************************** */
/* Configuring the application */
/* *************************** */
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: false }));


app.set('views', __dirname + '/../views'); // Files with views can be found in the 'views' directory
app.set('view engine', 'pug'); // Use the 'Pug' template system
app.locals.pretty = app.get('env') === 'development'; // The resulting HTML code will be indented in the development environment
/* ************************************************ */
app.use(morgan('dev'));
/* ******** */
/* "Routes" */
/* ******** */


let students = [
    {
          fname: 'Jan',
          lname: 'Kowalski'
    },
    {
          fname: 'Anna',
          lname: 'Nowak'
    },
];


app.get('/', function (request, response) {
    response.render('index', { students: students }); // Render the 'index' view
});

app.post('/', function (request, response) {
    const name = request.body.name || 'world';
    response.setHeader('Content-Type', 'text/plain');
    response.send(`Hello ${name}`);
});

/* ************************************************ */
app.listen(8000, function () {
    console.log('The server was started on port 8000');
    console.log('To stop the server, press "CTRL + C"');
});          
