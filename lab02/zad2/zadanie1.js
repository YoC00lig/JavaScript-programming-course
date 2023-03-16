"use strict";

let wynik = 0;

function cyfry(napis){
    let nieparzysta = 0;
    let parzysta = 0;
    for (const cyfra of napis){
        if (!isNaN(cyfra)){
            if (+cyfra % 2 === 0) parzysta += +cyfra;
            else nieparzysta += +cyfra;
        }
    }
    return [parzysta, nieparzysta];
}


function litery(napis){
    let male = 0;
    let duze = 0;
    for (const litera of napis){
        if (isNaN(litera)){
            if (litera === litera.toUpperCase()) duze++;
            else male++;
        }
    }
    return [male, duze];
}

function suma(napis){
    let liczba = "";
    if (napis.length > 0 && !isNaN(napis[0])){
        for (const cyfra of napis){
            if (!isNaN(cyfra)) liczba += cyfra;
            else break;
        }
    }
    wynik += +liczba;
    return wynik;
}

function clearWynik() {
    wynik = 0;
}

while (true){
    const podany_string = window.prompt('Podaj napis');
    if (podany_string === null) break;

    const wynik_cyfry = cyfry(podany_string);
    const wynik_litery = litery(podany_string);
    const wynik_suma = suma(podany_string);

    console.log(`\twynik_działania_funkcji_cyfry: 
    ${wynik_cyfry}\twynik_działania_funkcji_litery: 
    ${wynik_litery}\twynik_działania_funkcji_suma: ${wynik_suma}`);
}