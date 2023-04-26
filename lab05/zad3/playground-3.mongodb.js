/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('AGH');

// Insert a few documents into the sales collection.
db.getCollection('students').insertMany([
  { imie: 'Jan', nazwisko: 'Kowalski', wydzial: 'IET' },
    { imie: 'Anna', nazwisko: 'Nowak', wydzial: 'IET' },
    { imie: 'Adam', nazwisko: 'Kowalski', wydzial: 'IMIR' },
    { imie: 'Katarzyna', nazwisko: 'Nowacka', wydzial: 'EAIB' },
]);

const wydzial = 'IET';
db.getCollection('students').find({ wydzial: wydzial }).toArray((err, docs) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Studenci wydziału ${wydzial}:`);
      console.log(docs);
});
