"use strict";

var expect = chai.expect;

describe('Same cyfry', () => {
    it('2 = 2 (parzyste) i 1+3 = 4 (nieparzyste)', () => {
        const result = cyfry('123');
        console.log(result);
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(4);
    })
    it('Nie ma liter, skoro są same cyfry', () => {
        const result = litery('123');
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(0);
    })
    it('Suma dla liczby 123 to 123', () => {
        const result = suma('123');
        expect(result).to.equal(123);
    })

})


describe('Same litery', () => {
    it('są same litery, nie ma cyfr, wiec ilośc parzystych = 0 i nieparzystych = 0', () => {
        const result = cyfry('abCd');
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(0);
    })
    it('abd - 3 małe litery, C - 1 duza', () => {
        const result = litery('abCd');
        expect(result[0]).to.equal(3);
        expect(result[1]).to.equal(1);
    })
    it('Suma jest zero, nie ma ani jednej liczby', () => {
        const result = suma('abCd');
        expect(result).to.equal(0);
    })

})


describe('Same litery,a po nich cyfry', () => {
    it('jest liczba 123, wiec suma parzystych = 2, suma nieparzystych  = 4', () => {
        const result = cyfry('abCd123');
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(4);
    })
    it('abd - 3 małe litery, C - 1 duza, ignoruje liczby', () => {
        const result = litery('abCd123');
        expect(result[0]).to.equal(3);
        expect(result[1]).to.equal(1);
    })
    it('Są liczby, ale na końcu', () => {
        const result = suma('abCd123');
        expect(result).to.equal(0);
    })

})

describe('Same cyfry,a po nich litery', () => {
    it('suma parzystych: 2+2 = 4, nieparzystych = 1', () => {
        const result = cyfry('221sdAA');
        expect(result[0]).to.equal(4);
        expect(result[1]).to.equal(1);
    })
    it('dwie małe litery, dwie duze', () => {
        const result = litery('221sdAA');
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(2);
    })
    it('napis zaczyna się od liczby i ta liczba jest wynikiem', () => {
        const result = suma('221sdAA');
        expect(result).to.equal(221);
    })

})


describe('Pusty napis', () => {
    it('pusty napis, więc nie ma liczb', () => {
        const result = cyfry('');
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(0);
    })
    it('Pusty napis, nie ma liter', () => {
        const result = litery('');
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(0);
    })
    it('pusty napis, więc wynik = 0', () => {
        const result = suma('');
        expect(result).to.equal(0);
    })

})