<h1> Języki HTML oraz CSS </h1>
<a href="https://www.youtube.com/watch?v=opNgrPv3Qw8&embeds_euri=https%3A%2F%2Fupel.agh.edu.pl%2F&source_ve_path=MjM4NTE&feature=emb_title">Tutorial HTML/CSS</a>
<h2>🏠 Wykonaj następujące czynności:</h2>
<p>Skopiuj poniższą zawartość do osobnego pliku (HTML)</p>

``` HTML
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet"
        href="sheet.css"
        media="screen"
        type="text/css">
  <title>Tytuł strony</title>
</head>
<body>
  <header>
    <!-- Page title -->
    <!-- Background color: #EFF -->
    <!-- Border color: #A8A8A8 -->
    <h1>Tytuł strony</h1>
  </header>
  <nav>
    <!--Tutaj menu nawigacyjne / Here the navigation menu -->
    <!-- left & right margin: 25px -->
    <ul>
      <li>
        <a href="">Element 1</a>
      </li>
      <li>
        <a href="">Element 2</a>
      </li>
    </ul>
  </nav>
  <!-- Tutaj treść panelu bocznego / Here the content of the side panel-->
  <aside>
    <h1>Panel boczny</h1>
    <h2>Ciekawe odsyłacze</h2>
    <ul>
      <li>
        <a href="">Odsyłacz 1</a>
      </li>
      <li>
        <a href="">Odsyłacz 2</a>
      </li>
      <li>
        <a href="">Odsyłacz 3</a>
      </li>
    </ul>
  </aside>
  <main>
    <!--Tutaj treść strony / Here the content of the page -->
    <h1>Treść strony</h1>
    <blockquote>
      Natenczas Wojski chwycił na taśmie przypięty Swój róg bawoli, długi, cętkowany, kręty Jak wąż boa, oburącz do ust go przycisnął, Wzdął policzki jak banię, w oczach krwią zabłysnął, Zasunął wpół powieki, wciągnął w głąb pół brzucha I do płuc wysłał z niego cały zapas ducha, I zagrał: róg jak wicher, wirowatym dechem Niesie w puszczę muzykę i podwaja echem. Umilkli strzelcy, stali szczwacze zadziwieni Mocą, czystością, dziwną harmoniją pieni. Starzec cały kunszt, którym niegdyś w lasach słynął, Jeszcze raz przed uszami myśliwców rozwinął; Napełnił wnet, ożywił knieje i dąbrowy, Jakby psiarnię w nie wpuścił i rozpoczął łowy. Bo w graniu była łowów historyja krótka: Zrazu odzew dźwięczący, rześki: to pobudka; Potem jęki po jękach skomlą: to psów granie; A gdzieniegdzie ton twardszy jak grzmot: to strzelanie.
    </blockquote>
  </main>
  <footer>
    <!-- Tutaj treść stopki / Here the content of the footer -->
    <a href="mailto:your.email.address">Imię Nazwisko</a>
  </footer>
</body>
</html>
```

Obejrzyj dokument w przeglądarce WWW
Utwórz plik 'sheet.css' o następującej zawartości
```CSS
aside  {
  /* Specyfikacja wyglądu */
}
footer {
  /* Specyfikacja wyglądu */
}      
header {
  /* Specyfikacja wyglądu */
}     
main { 
  /* Specyfikacja wyglądu */
}
nav {
  /* Specyfikacja wyglądu */
}
nav ul {
  /* Specyfikacja wyglądu */
}
nav li {
  /* Specyfikacja wyglądu */
}
```

<p>Zmodyfikuj zawartość pliku 'sheet.css' (tutoriale: <a href="https://www.kurshtml.edu.pl/css/">1</a>, <a href="https://www.w3schools.com/css/">2</a> oraz <a href="https://bulldogjob.pl/readme/jak-uzywac-flexbox-w-css-przyklady">3</a>) tak, aby otrzymać stronę WWW o wyglądzie takim, jak pokazano poniżej:</p>
<img src="/lab01/readme/screen.png">
<p>Jak można zauważyć, część z selektorów zawiera własność o takiej samej nazwie i wartości, np. własność ustalająca kolor tła na błękitny</p>
<p>Utwórz, w pliku .css, definicję <a href="https://ferrante.pl/books/html/chapter7.html">klasy</a> azure, a następnie umieść w niej definicję błękitnego tła, tj. własność z poprzedniego punktu</p>
<p>Usuń ze wszystkich selektorów ww. własność — definicja błękitnego tła ma występować, tylko i wyłącznie, w obrębie klasy azure</p>
<p>W dokumencie HTML przypisz wszystkim elementom, które mają mieć błękitne tło, atrybut class w następującej postaci: class='azure'</p>
<p>Przyglądnij się zawartości pliku .css i spróbuj samodzielnie wyodrębnić inne, wspólne własności — zidentyfikuj inne,
  przydatne klasy, a następnie użyj tych klas w dokumencie HTML</p>
<h1>Animacje</h1>
<h2>🏠 Korzystając z własności CSS3 <a href = "http://webmaster.helion.pl/index.php/css3-animacje" > animation </a> </h2>
  spowoduj, aby kolor napisów: "Panel boczny", "Tytuł strony" oraz "Treść strony" ulegał płynnej
  zmianie od koloru --text-color-initial do --text-color-final i vice versa, gdzie: --text-color-initial
  oraz --text-color-final są <a href = "https://frontcave.pl/css-variables-czemu-warto-je-znac/"> zmiennymi CSS </a> zdefiniowanymi przez Ciebie

<h1>Responsywna strona WWW</h1>
<h2>🏠 Wykonaj następujące czynności:</h2>
<ul>
  <li>
    Przeczytaj artykuły:<ul>
    <li><a  href="https://pl.wikipedia.org/wiki/Responsive_web_design">Responsive web design</a></li>
    <li><a href="https://www.kurshtml.edu.pl/css/zapytania_mediow,media.html"> Zapytania mediów </a></li>
    <li><a href="https://www.teamsolution.pl/blog/mysl-najpierw-mobilnie-czyli-czym-jest-mobile-first-design">Myśl najpierw mobilnie, 
      czyli czym jest Mobile First Design?</a></li></ul>
    
  </li>
 
<li>
  Zmodyfikuj stronę WWW utworzoną w ramach zadania 1 tak, aby była responsywna:<ul>
    
  <li>W przypadku komputerów lub tabletów układ ma być taki jak na powyższym rysunku</li>
  <li>W przypadku telefonów wszystkie elementy (header, nav, aside, main oraz footer) mają być w układzie jednokolumnowym, 
  a ich szerokość ma być równa szerokości okna przeglądarki WWW — jednakowa szerokość elementów w kolumnie</li>
  <li>Rozmiar czcionek — proporcjonalnie do wielkości okna — należy używać elastycznych jednostek </li>
  <li>Włącz widok trybu responsywnego (Ctrl+Shift+M — Firefox, Ctrl+Shift+I, Ctrl+Shift+M — Google Chrome) i przetestuj 
  czy strona zachowuje się w sposób responsywny</li></ul>
 </li>
 
<h1> Frameworki do tworzenia stron responsywnych </h1>
<p> 1. Skopiuj zawartość każdego z poniższych szablonów do osobnego pliku (HTML) i wykonaj czynności wymienione w treści (skopiowanego) dokumentu HTML </p>

<div>
 <p>Szablon "W3.CSS"</p>
   
``` HTML
  <!DOCTYPE html>
<html lang="en">
  <!-- Zmień wartość "lang" z 'en' na 'pl' -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">
    <link rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"><!-- Icons -->
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <title>
      Tytuł strony / Page Title
    </title>
  </head>
  <body>
    <!-- Umieść tutaj treść elementu 'body' z zadania 1 -->
    <!-- Put here the contents of the 'body' element from exercise 1 -->
    <script src="https://www.w3schools.com/lib/w3.js"></script>
  </body>
</html>
```
</div>


<div>
<p>Szablon "Bulma"</p>

``` HTML
  <!DOCTYPE html>
  <html lang="pl">
    <!-- Zmień wartość "lang" z 'en' na 'pl' -->
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0">
      <meta http-equiv="x-ua-compatible"
            content="ie=edge">
      <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"><!-- Icons -->
      <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
      <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
      <title>
        Tytuł strony / Page title
      </title>
    </head>
    <body>
      <!-- Umieść tutaj treść elementu 'body' z zadania 1 -->
      <!-- Put here the contents of the 'body' element from exercise 1 -->
    </body>
  </html>
  ```
   </div>

 <div>
 <p>Szablon "Bootstrap"</p>
   
``` HTML
  <!DOCTYPE html>
  <html lang="en">
    <!-- Zmień wartość "lang" z 'en' na 'pl' -->
    <head>
      <meta charset="utf-8">
      <meta name="viewport"
            content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossorigin="anonymous"><!-- Icons -->
      <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
      <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
      <title>
        Tytuł strony / Page tile
      </title>
    </head>
    <body>
      <!-- Umieść tutaj treść elementu 'body' z zadania 1 -->
      <!-- Put here the contents of the 'body' element from exercise 1 -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"></script>
    </body>
  </html>
```
</div>
 
 
 
<p>2. Obejrzyj każdy z dokumentów w przeglądarce WWW</p>
<p>3. 🧑‍🏫 Korzystając z dokumentacji (<a href="https://www.w3schools.com/w3css/">W3.CSS</a>, <a href="https://bulma.io">Bulma</a>, <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Bootstrap</a>) zmodyfikuj zawartość jednego z wybranych przez Ciebie szablonów tak, aby otrzymać responsywną stronę WWW o wyglądzie i treści zaprezentowanej na początku ćwiczeń. Przewidywane elementy składowe to:
 <ol> 
 <li>Obszar treści zawierający kontener, a w nim:
 <ul> 
 <li>Siatka, której układ, w zależności od rozdzielczości ekranu, ulega zmianie </li>
 <li>Pasek nawigacyjny</li>
 <li>Obrazki </li>
 <li>Karty</li>
 <li>Tabele </li>
 <li>Ikony <a href="https://fontawesome.com/icons?m%21%21%21%21%21=free">Font Awesome</a> / <a href="https://icons.getbootstrap.com">Bootstrap</a> </li>
 <li>Stopka </li>
 </ul>
 </li>
 <li>Animacja stworzona w oparciu o własność CSS 'animation' </li>
 </ol>
 </p>
