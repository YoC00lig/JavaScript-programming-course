<h1>Podstawy języka JavaScript</h1>

<h2> 🏠 Wczytywanie / Wypisywanie danych </h2>

<ol> 
  <li> Utwórz dokument HTML o nazwie 'zadanie1A.html',  zawierający następujący kod:</li>
  
``` HTML
<html>
  <body>
    <div>Treść dokumentu HTML przed skryptem</div>
    <script>
      console.log('Tekst 1');
      window.alert('Tekst 2');
      document.write('Tekst 3');
    </script>
    <div>Treść dokumentu HTML po skrypcie</div>
  </body>
</html>   
```
  <li>Uruchom przeglądarkę WWW, a następnie otwórz jej <a href="https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers">konsolę</a> </li>
  <li>Załaduj powyższy dokument w bieżącej zakładce przeglądarki WWW</li>
  <li>Spróbuj zlokalizować miejsce pojawiania się tekstów: Tekst 1, Tekst 2 oraz Tekst 3</li>
  <li>Utwórz alternatywną wersję dokumentu HTML, w której to skrypt będzie wywoływany po zakończeniu renderowania dokumentu HTML, a nie w trakcie (renderowania) — utwórz plik  'zadanie1B.html' zawierający poniższy kod, a następnie załaduj go do przeglądarki WWW</li>
  
  ``` HTML
  
  <html>
  <body onLoad="
            console.log('Tekst 1');
            window.alert('Tekst 2');
            document.write('Tekst 3');
          ">
    <div>Treść dokumentu HTML</div>
    <div>Treść dokumentu HTML</div>
    <div>Treść dokumentu HTML</div>
  </body>
</html>    
  
  ``` 
  
  <li>Jak myślisz, dlaczego w tej wersji, treść dokumentu HTML nie jest widoczna w przeglądarce — zakomentuj linię, która jest tego przyczyną</li>
  <li>Dopisz w ciele dokumentu:</li>
  
  ``` HTML
  <script>
  window.prompt("Tekst1","Tekst2");
</script>

  ```
  
  <li>Zbadaj, jakie znaczenie mają poszczególne argumenty metody window.prompt() i czy są one obowiązkowe</li>
  <li>Przeczytaj:
    <ul>
      <li><a href="https://bulldogjob.pl/readme/nie-uzywaj-ciagle-console-log-w-javascript">Nie używaj ciągle console.log() w JavaScript</a></li>
      <li><a href="https://dmitripavlutin.com/console-log-tips/">Handy Tips on Using console.log()</a></li>
      <li>Operator <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a></li>
    </ul>
    
  </li>
  
  <li>Napisz funkcję, która czterokrotnie wykonuje następujący kod:
    <ul> 
      <li>Za pomocą window.prompt() wczytuje wartość</li>
      <li>Za pomocą console.log() wypisuje informację postaci: wczytanaWartość:typWczytanejWartości</li>
    </ul>
  </li>
  
  <li>Sprawdź, co jest wypisywane dla następujących czterech przypadków:
    <ul> 
      <li>Użytkownik wprowadził wartość będącą liczbą i nacisnął klawisz 'Enter' lub przycisk 'OK'</li>
      <li>Użytkownik wprowadził wartość będącą napisem i nacisnął klawisz 'Enter' lub przycisk 'OK'</li>
      <li>Użytkownik nie wprowadził wartości, a następnie nacisnął powyższy klawisz / przycisk</li>
      <li>Użytkownik wprowadził wartość, a następnie nacisnął przycisk 'Anuluj'</li>
    </ul>
  </li>
  
  <li>Dopisz w obrębie elementu "body"</li>
  
  ``` HTML
  
   <form oninput="wynik.value = pole_tekstowe.value + pole_liczbowe.value">
    <input id="pole_tekstowe" placeholder="Wprowadź tekst" type="text">
    +
    <input id="pole_liczbowe" type="number" placeholder="Wprowadź liczbę">    
    =
    <output name="wynik" for="pole_tekstowe pole_liczbowe">Tu pojawi się wynik obliczeń</output>    
    <br>    
    <input type="button" value="Wypisz">
  </form>
  
  ```
  
  <li>Używając <a href="https://www.quirksmode.org/js/dom0.html">DOM 0</a>:
    <ul>
      <li><a href="https://nafrontendzie.pl/wywolywanie-obsluga-zdarzen-w-javascript/">Zarejestruj funkcję zwrotną obsługi zdarzenia</a> kliknięto przycisk "Wypisz" (ang. event handler) — użyj atrybutu postaci 'onNazwaZdarzenia' (rejestracja inline)</li>
      <li>W treści event handlera, za pomocą kolekcji <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/forms#getting_an_element_from_within_a_form">document.forms[].elements[]</a>, odczytaj wartość z obydwu pól formularza </li>
      <li>Wypisz (w konsoli) informację postaci:
        <ul>
          <li>wczytanaWartośćZPolaTekstowego:typWczytanejWartości</li>
          <li>wczytanaWartośćZPolaNumerycznego:typWczytanejWartości</li>
        </ul>
      </li>
    </ul>
  </li>
  
  <li>Zbadaj, co wypisuje event handler w przypadku:
    <ul> 
      <li> Wprowadzenia wartości będącej liczbą i naciśnięcia powyższego przycisku </li>
      <li> Wprowadzenia wartości będącej napisem i naciśnięcia ww. przycisku </li>
      <li> Niewprowadzenia wartości i naciśnięcia przycisku "Wypisz" </li>
    </ul>
  </li>
  
  <li>Przenieś całą zawartość elementu "script"  (kod JS)  do osobnego pliku o nazwie  "zadanie1.js"  — utwórz zewnętrzny skrypt JS  —  a następnie załaduj ten skrypt z poziomu dokumentu HTML  'zadanie1.html'
</li>
</ol>


<h2> 🏠 Testy </h2>
<ol>
  <li>Przeczytaj <a href="https://www.sitepoint.com/unit-test-javascript-mocha-chai/">opis</a> tworzenia testów <a href="https://mochajs.org">Mocha</a> oraz <a href="http://chaijs.com">Chai</a></li>
  <li>Utwórz dokument HTML o nazwie 'zadanie2.html' i poniższej zawartości</li>
  
  ``` HTML
  
  <!-- Źródło / Source: https://mochajs.org/#running-mocha-in-the-browser -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>
      Mocha tests
    </title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
          href="https://unpkg.com/mocha/mocha.css">
  </head>
  <body>
    <div id="mocha">
    </div>
    <script src="https://unpkg.com/chai/chai.js"></script> 
    <script src="https://unpkg.com/mocha/mocha.js"></script> 
    <script class="mocha-init">
      mocha.setup('bdd');
      mocha.checkLeaks();
    </script> 
    <script src="zadanie2.js"></script> 
    <script class="mocha-exec">
      mocha.run();
    </script>
  </body>
</html>
  
  ```
  <li>Utwórz plik  'zadanie2.js' o następującej zawartości:</li>
  
  ``` JavaScript
  
  var expect = chai.expect;
function sum(x,y) {
    return x+y;
}
describe('The sum() function', function() {
 it('Returns 4 for 2+2', function() {
   expect(sum(2,2)).to.equal(4);
 });
 it('Returns 0 for -2+2', function() {
   expect(sum(-2,2)).to.equal(0);
 });
});
  
  ```
  <li>Otwórz dokument 'zadanie2.html' w przeglądarce WWW</li>
  <li>Włącz <a href="https://marcoos.wordpress.com/2011/01/25/ecmascript-5-strict-mode-tryb-scisly/">tryb ścisły</a></li>
  <li>Zaznajom się z pętlami <a href="https://zacznijprogramowac.net/szybki-kurs-javascript/petle-for-of-oraz-for-in/">for...in oraz for...of</a></li>
  <li>Napisz skrypt, który za pomocą metody window.prompt() wczytuje dane (napis), przekazuje je do poniższych funkcji, a następnie, przy użyciu console.log(), wypisuje w konsoli  (na bieżąco po każdym wczytaniu danych):
\twynik_działania_funkcji_cyfry\twynik_działania_funkcji_litery\twynik_działania_funkcji_suma</li>
  <img align="center" src="/lab02/readme/demo.png">
  
  <li>Zaimplementuj test Mocha, weryfikujący poprawność działania powyższych funkcji, dla napisów zawierających:
    <ul>
      <li>Same cyfry</li>
      <li>Same litery</li>
      <li>Litery, a po nich cyfry</li>
      <li>Cyfry, a po nich litery</li>
      <li>Pusty napis</li>
    </ul>
  </li>
</ol>

<h2> 🏠 Tworzenie dynamicznych grafik</h2>
<ol>
  <li>Utwórz dokument HTML o nazwie 'zadanie3.html' i poniższej zawartości:</li>
  
  ``` HTML
  
   <!DOCTYPE html>
 <html lang="pl">
   <head>
     <meta charset="UTF-8">
     <title>Page title</title>
     <script>
       "use strict"; // Nie wyłączaj trybu ścisłego    
       var canvas = document.getElementById('canvas');
       ctx = canvas.getContext('2d');        
       ctx.fillText("Hello World", 10, 50); //Wykreślenie podanego tekstu na płótnie
     </script>
   </head>
   <body>
     <main>
       <h1>Płótno</h1>
       <canvas id="canvas" width="500" height="500" style="border:1px solid #000000;">
       Wygląda na to, że twoja przeglądarka nie obsługuje elementu "canvas" 
       </canvas>
     </main>
   </body>
   </html>
  
  ```
  
  <li>Dlaczego na powierzchni płótna nie pojawił się napis "Hello World"? — zobacz jaki komunikat wyświetla się w konsoli przeglądarki WWW (Ctrl+Shift+I); spróbuj wprowadzić  takie modyfikacje, aby powyższe instrukcje zadziałały</li>
  
  ```
  Informacja
         Skrypt zawiera dwa błędy — spróbuj je odnaleźć i poprawić
  ```
  
  <li>Przeczytaj <a href="https://mansfeld.pl/programowanie/html-canvas-kurs-od-podstaw/">HTML5 Canvas – kurs od podstaw</a> lub <a href="https://learn.microsoft.com/pl-pl/previous-versions/hh553233(v=msdn.10)?redirectedfrom=MSDN">Kurs HTML5 – Canvas – Wprowadzenie</a></li>
  <li>Opracuj, a następnie narysuj (w elemencie 'canvas') logo dla aplikacji, która jest treścią ćwiczeń — logo powinno się składać, z co najmniej, trzech figur geometrycznych</li>
  <li>Umieść je w pasku nawigacyjnym strony WWW z poprzednich ćwiczeń</li>
</ol>

<h2> 🧑‍🏫 Zadanie</h2>

<ol>
  <li>Przeczytaj <a href="https://pl.wix.com/blog/artykul/typografia-co-to">Typografia – co to jest i jak efektywnie ją wykorzystać</a></li>
  <li>Rozbuduj dokument HTML z poprzednich ćwiczeń o formularz HTML oraz skrypt JavaScript — szczegóły zostaną podane na początku ćwiczeń. Założenia dla skryptu:
    <ul>
      <li>Wczytuje dane zawarte w: oknie prompt lub <a href="https://www.w3schools.com/html/html_form_input_types.asp">polach wprowadzania danych</a> formularza HTML, korzystając z DOM 0 — obiektów / kolekcji 'document.forms' oraz 'elements'</li>
      <li>Przechowuje dane w <a href="https://www.sorigo.pl/pl/blog/saving-data-in-the-browser-memory">pamięci przeglądarki</a>, kolekcji <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections">indeksowanej</a> lub <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections">kluczowanej</a></li>
      <li>Realizuje funkcjonalność podaną na początku ćwiczeń</li>
      <li>Wypisuje:
        <ul>
          <li>Wyniki — w konsoli (metoda console.log()) lub w elemencie 'canvas'</li>
          <li>Ostrzeżenia i błędy — w konsoli (metody console.warn() oraz console.error()) lub w oknie alert</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
