"use strict"
/* ********* */
/* CommonsJS */
/* ********* */
// const fs = require('fs-extra')
// const { argv } = require('node:process');
/* **** */
/* ES6  */
/* **** */
import fs from 'fs-extra';
import { argv } from 'node:process';
/************************* */
function read_sync() {
    console.log(`\x1B[32mWykonano pierwszą linię funkcji "read_sync()"\x1B[0m`);
    let data = fs.readFileSync(argv[1]);
    console.log('\x1B[33mZakończono wczytywanie zawartości pliku — zawartość jest dostępna w zmiennej \'data\'\x1B[0m');
    console.log(`\x1B[32mWykonano ostatnią linię funkcji "read_sync()"\x1B[0m`);
}
function read_async() {
    console.log(`\x1B[32mWykonano pierwszą linię funkcji "read_async()"\x1B[0m`);
    fs.readFile(argv[1], (err, data) => {
        if (err) throw err;
        console.log('\x1B[33mZakończono wczytywanie zawartości pliku — zawartość jest dostępna w zmiennej \'data\'\x1B[0m');
    });
    console.log(`\x1B[32mWykonano ostatnią linię funkcji "read_async()"\x1B[0m`);
}
/************************* */
console.clear()
console.log(`\x1B[31mSynchroniczny odczyt pliku "${argv[1]}"\x1B[0m`);
read_sync();
console.log('------------------');
console.log(`\x1B[31mAsynchroniczny odczyt pliku "${argv[1]}"\x1B[0m`);
read_async();
console.log('\x1B[34mWykonano ostatnią linię skryptu\x1B[0m');    


//// ODP6: wyniki nie są identyczne:

/// Synchroniczny odczyt pliku "/Users/joannakulig/Desktop/...../console_script1.js"
// Wykonano pierwszą linię funkcji "read_sync()"
// Zakończono wczytywanie zawartości pliku — zawartość jest dostępna w zmiennej 'data'
// Wykonano ostatnią linię funkcji "read_sync()"
// ------------------
// Asynchroniczny odczyt pliku "/Users/joannakulig/Desktop/...../console_script1.js"
// Wykonano pierwszą linię funkcji "read_async()"
// Wykonano ostatnią linię funkcji "read_async()"
// Wykonano ostatnią linię skryptu
// Zakończono wczytywanie zawartości pliku — zawartość jest dostępna w zmiennej 'data'
// (base) joannakulig@macbook-pro-joanna-3 zad1 % 


//// Funkcja read_sync() dokonuje synchronicznego odczytu pliku przy użyciu metody readFileSync() i blokuje wykonywanie innych operacji, dopóki 
// nie zostanie wczytana cała zawartość pliku. Dopiero po wczytaniu danych funkcja kończy swoje działanie i wyświetla odpowiednie komunikaty.

// Z drugiej strony, funkcja read_async() dokonuje asynchronicznego odczytu pliku przy użyciu metody readFile(). Metoda ta nie blokuje działania
// programu i pozwala na równoczesne wykonywanie innych operacji. Po wczytaniu danych z pliku, wywoływana jest przekazana jako drugi argument 
// funkcja zwrotna (callback), która wyświetla odpowiednie komunikaty.

// W związku z powyższym, funkcja read_sync() wyświetla komunikaty w oczekiwanej kolejności (najpierw wykonuje pierwszą linię, potem wczytuje 
// zawartość pliku, a na końcu wykonuje ostatnią linię), podczas gdy funkcja read_async() wyświetla komunikat "Wykonano ostatnią linię funkcji 
// 'read_async()'" przed zakończeniem wczytywania zawartości pliku.