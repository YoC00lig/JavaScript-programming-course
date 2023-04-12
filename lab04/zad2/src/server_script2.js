import http from 'http';
import fs from 'fs';
import { exec } from 'child_process';

const filePath = 'lab04/zad2/src/licznik.txt';

function readCounter(isAsync, callback) {
  console.log("HERE");
  if (isAsync) {
    fs.readFile(filePath, 'utf8').then((fileContent) => {
      const count = parseInt(fileContent);
      callback(count);
    }).catch((err) => {
      console.error(`Nie udało się odczytać pliku: ${err}`);
    });
  } 
  else {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const count = parseInt(fileContent);
      callback(count);
    } catch (err) {
      console.error(`Nie udało się odczytać pliku: ${err}`);
    }
  }
}

function incrementCounter(isAsync, res) {

  readCounter(isAsync, (count) => {

    count++;
    console.log(`Aktualny stan licznika: ${count}`);
    
    if (isAsync) {
      fs.promises.writeFile(filePath, count.toString()).then(() => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Liczba uruchomień: ${count}`);
      }).catch((err) => {
        console.error(`Nie udało się zapisać pliku: ${err}`);
      });
    } 

    else {
      try {
        fs.writeFileSync(filePath, count.toString());
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Liczba uruchomień: ${count}`);
      } catch (err) {
        console.error(`Nie udało się zapisać pliku: ${err}`);
      }
    }
  });
}

function execute(command, res) {
  exec(command, (err, output) => {
    if (err) {
      console.error('Nie udało się wykonać komendy: ', err);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`<pre>${output}</pre>`);
  });
}


function listener(req, res) {
  console.log('--------------------------------------');
  console.log(`The relative URL of the current request: ${req.url}`);
  console.log(`Access method: ${req.method}`);
  console.log('--------------------------------------');

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <body>

          <form method="post">

            <select name="operation">
              <option value="-">-</option>
              <option value="sync">sync</option>
              <option value="async">async</option>
            </select>

            <br/>
            <textarea name="commands" rows="10" cols="40"></textarea>
            <br/>

            <button type="submit">Start</button>

          </form>

        </body>
      </html>
    `);
    res.end();
  }
  else if (req.method === 'POST') {
    let body = '';
    req.on('data', (data) => body += data);
    console.log(body);
    req.on('end', () => {
      const post = new URLSearchParams(body);
      const operation = post.get('operation');
      const commands = post.get('commands');
      if (operation === 'sync') {
        incrementCounter(false, res);
      }
      else if (operation === 'async') {
        incrementCounter(true, res);
      }
      else {
        execute(commands, res);
      }
    });
  }
}


const server = http.createServer(listener); 
server.listen(8000);