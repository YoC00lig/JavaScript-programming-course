import fs from 'fs';
const filePath = 'lab04/zad1/src/licznik.txt';
import { exec } from 'child_process';

function readCounter(filePath, async, callback) {

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
      } catch (err) {
        console.error(`Nie udało się odczytać pliku: ${err}`);
        return;
      }
    }
  }
  
function execute(command){
    exec(command, (err, output) => {
        if (err) {
            console.error("Nie udalo się wykonać komendy: ", err)
            return
        }
        console.log("wynik: \n", output)
    })
}

function incrementCounter(async) {
    readCounter(filePath, async, (count) => {

      count++;

      if (async) {
        fs.writeFile(filePath, count.toString(), (err) => {
          if (err) {
            console.error(`Nie udało się zapisać pliku: ${err}`);
            return;
          }
          console.log(`Liczba uruchomień: ${count}`);
        });
      } 

      else {
        try {
          fs.writeFileSync(filePath, count.toString());
          console.log(`Liczba uruchomień: ${count}`);
        } catch (err) {
          console.error(`Nie udało się zapisać pliku: ${err}`);
          return;
        }
      }
    });
}
  
function runCommand(command) {
  if (command === '--sync') incrementCounter(false);
  else if (command === '--async') incrementCounter(true);
  else {
    console.log('Wprowadź komendy:');
    process.stdin.on('data', (data) => {
      const command = data.toString().trim();
      if (command === 'exit') process.exit();
      else execute(command);
    });
  }
}

const command = process.argv[2];
runCommand(command);
