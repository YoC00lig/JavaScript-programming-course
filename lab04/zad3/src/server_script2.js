import http from 'http';
import fs from 'fs';
import { exec } from 'child_process';
import {Buffer} from 'buffer'; /// npx eslint --fix 'src/server_script2.js' - bez tego importu jest błąd

const filePath = 'licznik.txt';


/** Opis funkcji readCounter . */
function readCounter(async, callback) {

  if (async) {
    fs.readFile(filePath, 'utf8', (err, fileContent) => {
      if (err) {
        console.error(`Nie udało się odczytać pliku: ${err}`);
        return;
      }
      const count = parseInt(fileContent);
      callback(count);
    });
  } 

  else {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const count = parseInt(fileContent);
      callback(count);
    } 
    catch (err) {
      console.error(`Nie udało się odczytać pliku: ${err}`);
      return;
    }
  }
}

/** opis funkcji incrementCounter . */

function incrementCounter(isAsync, res) {

  readCounter(isAsync, (count) => {

    count++;
    console.log(`Aktualny stan licznika: ${count}`);
    
    if (isAsync) {
      fs.writeFile(filePath, count.toString(), (err) =>  {
        if (err) {
          console.error(`Nie udało się zapisać pliku: ${err}`);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Liczba uruchomień: ${count}`);
      });
    } 

    else {
      try {
        fs.writeFileSync(filePath, count.toString());
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Liczba uruchomień: ${count}`);
      } 
      catch (err) {
        console.error(`Nie udało się zapisać pliku: ${err}`);
      }
    }
  });
}

/** opis funkcji execute. */
function execute(command, res) {
  if (!command) {
    console.error('Nie podano komendy.');
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Nie podano komendy.');
    return;
  }

  exec(command, (err, output) => {
    if (err) {
      console.error(`Nie udało się wykonać komendy: ${err}`);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Nie udało się wykonać komendy: ${err}`);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`<pre>${output}</pre>`);
    console.log(`Wynik: ${output}`)
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

          <form id="myForm" method="post">

            <select name="operation">
              <option value="-">-</option>
              <option value="sync">sync</option>
              <option value="async">async</option>
            </select>

            <br/>
            <textarea name="commands"></textarea>
            <br/>

            <button type="submit">Start</button>
            
          </form>

        </body>
      </html>
    `);
    res.end();
  
    if (req.method === 'POST'){
      const body = [];

      req.on('data', (operationCommand) => body.push(operationCommand)).on('end', () => {

        /**
       * Reprezentuje informacje dotyczace wykonywanej operacji.
       * @param {string} params - nowy obiekt URLSearchParams na podstawie ciągu znaków data.
       * @param {string} operation - nazwa wykonywanej operacji
       * @param {string} commands - zawiera informację dotyczącą polecenia 
       */
        const data = Buffer.from(body).toString();
        const params = new URLSearchParams(data);
        const operation = params.get('operation');
        const commands = params.get('commands');

        if (operation === 'sync') incrementCounter(false, res);
        else if (operation === 'async') incrementCounter(true, res);
        else execute(commands, res);
      });
  }}
}

const server = http.createServer(listener); 
server.listen(8000);