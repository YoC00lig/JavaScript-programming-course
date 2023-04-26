import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/../views'); // Files with views can be found in the 'views' directory
app.set('view engine', 'pug'); // Use the 'Pug' template system
app.locals.pretty = app.get('env') === 'development'; // The resulting HTML code will be indented in the development environment

app.use(morgan('dev'));


// Connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.get('/', async function (request, response) {
  try {
    await client.connect();

    console.log('Connected to MongoDB');

    const collection = client.db('AGH').collection('students');

    const students = await collection.find().toArray();

    console.log('Students:', students);
    response.render('index', { students: students });
  } 
  catch (err) {
    console.error(err);
  }
});

app.post('/', function (request, response) {
    const name = request.body.name || 'world';
    response.setHeader('Content-Type', 'text/plain');
    response.send(`Hello ${name}`);
});


app.listen(8000, function () {
    console.log('The server was started on port 8000');
    console.log('To stop the server, press "CTRL + C"');
});    
