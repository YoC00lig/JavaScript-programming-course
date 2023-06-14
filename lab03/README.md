<h1> Tworzenie animacji, DOM 4, podstawy React-a </h1>

<h3> 🏠 1. Tworzenie animacji </h3>
<p> 1. Utwórz następujący dokument HTML: </p>

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation</title>
  </head>
  <body>
    <form onsubmit="event.preventDefault();">
      <h2>requestAnimationFrame()</h2>
      <label for="counter">Counter→</label>
      <output id="counter" style="font-size: 4vh; color: red;">0</output>
      <br>
      <button id="start" onclick="startAnimation()">Start</button>
      <button id="stop" disabled onclick="stopAnimation()">Stop</button>
      <!-- ************************************************************** -->
      <hr>
      <h2>Time-consuming calculations — version 1</h2>
      <label for="result_main">Result:</label>
      <output id="result_main">0</output>
      <br>
      <label for="iterations_main">Number of iterations:</label>
      <input id="iterations_main" type="text" value="50">
      <button onclick="document.forms[0].result_main.value = calculatePrimes()">Run calculations</button>
      <!-- ************************************************************** -->
      <h2>Time-consuming calculations — version 2</h2>
      <label for="result_worker">Result:</label>
      <output id="result_worker">0</output>
      <br>
      <label for="iterations_worker">Number of iterations:</label>
      <input id="iterations_worker" type="text" value="50">
      <button onclick="void(0)">Run calculations</button>
    </form>
    <script>
      var animation;
      var i = 0;
      function calculatePrimes() {
        const iterations = document.forms[0].iterations_main.value || 50;
        // Source: https://udn.realityripple.com/docs/Tools/Performance/Scenarios/Intensive_JavaScript
        var primes = [];
        for (var i = 0; i < iterations; i++) {
          var candidate = i * (1000000000 * Math.random());
          var isPrime = true;
          for (var c = 2; c <= Math.sqrt(candidate); ++c) {
            if (candidate % c === 0) {
              // not prime
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            primes.push(candidate);
          }
        }
        return primes;
      }
      function startAnimation() {
        document.forms[0].start.disabled = true;
        document.forms[0].stop.disabled = false;
        animation = window.requestAnimationFrame(step);
      }
      function step() {
        document.forms[0].counter.value = i++;
        animation = window.requestAnimationFrame(step);
      }
      function stopAnimation() {
        document.forms[0].start.disabled = false;
        document.forms[0].stop.disabled = true;
        window.cancelAnimationFrame(animation)
      }
    </script>
  </body>
</html>
```

<p> 2. Wyświetl go w przeglądarce, a następnie: </p>
<ol>
  <li> Uruchom licznik — naciśnij przycisk Start</li>
  <li> W sekcji "Time-consuming calculations — version 1", uruchom obliczenia przyciskiem Run calculations i zaobserwuj, czy obliczenia mają negatywny wpływ na szybkość działania licznika?</li>
  <li> Sprawdź, czy uruchomienie obliczeń dla znacznie większej liczby iteracji  — w polu iterations_main ("Number of iterations") wpisz np. 2000 zamiast 50 —  ma jakikolwiek wpływ na szybkość działania licznika?</li>
  <li> Zatrzymaj licznik (przycisk Stop), następnie ponownie uruchom obliczenia i sprawdź, czy GUI reaguje na akcje użytkownika, tzn. czy, w trakcie trwania obliczeń, przycisk Start, natychmiastowo, wykrywa fakt jego naciśnięcia i uruchamia licznik?</li>
</ol>


<p> 3. Zawarty w dokumencie skrypt używa metody window.requestAnimationFrame() do cyklicznej modyfikacji wartości licznika. Przeczytaj opis  pozostałych metod do harmonogramowania wywołań funkcji — window.setInterval() oraz window.setTimeout()</p>

<p> 4. Wywnioskuj: czy w przypadku tych wszystkich trzech metod, treść funkcji zwrotnych (ang. callbacks) wykonuje się w osobnym wątku, czy w wątku głównym? Przeczytaj treść  poniższych artykułów, a następnie zweryfikuj swoją hipotezę</p>

<ul>
  <li><a href="https://udn.realityripple.com/docs/Tools/Performance/Scenarios/Intensive_JavaScript"> Intensive JavaScript</a> </li>
  <li><a href="https://johnresig.com/blog/how-javascript-timers-work/"> How JavaScript Timers work?</a> </li>
</ul>
  
  
  <p> 5. Przeczytaj opis <a href="https://johnresig.com/blog/how-javascript-timers-work/">wątków roboczych</a> lub obejrzyj <a href="https://www.youtube.com/watch?v=Gcp7triXFjg">film</a></p>
  
  <p> 6. Utwórz plik worker.js i skopiuj do niego treść funkcji calculatePrimes() — wątek roboczy ma wykonywać czasochłonne obliczenia; ponadto dodaj kod umożliwiający komunikację pomiędzy wątkiem głównym a roboczym — wątek główny ma:</p>
  
  <ul>
    <li> Wysłać wątkowi roboczemu, po naciśnięciu przycisku Run calculations w sekcji "Time-consuming calculations — version 2", zawartość pola iterations_worker</li>
    <li> Odebrać wynik obliczeń od wątku roboczego, a następnie wyświetlić ten wynik w polu result_worker powyższej sekcji</li>
  </ul>
  
  
  <p> 7. Sprawdź, czy znaczące zwiększenie liczby iteracji — wpisz wartość 2000 do pola iterations_worker, a następnie uruchom obliczenia — ma nadal negatywny wpływ na szybkość działania licznika, bądź czy GUI, z opóźnieniem, reaguje na akcje użytkownika?</p>
  
  <a href = "https://www.youtube.com/watch?v=MD1euJQQkLQ"> Asynchroniczność w JavaScript - link </a>
  
<h1> 🏠 2. DOM 4 </h1>
<h2> 2.1. Modyfikowanie wyglądu strony WWW </h2>

<p> 1. Zmodyfikuj pierwszy przykładowy dokument HTML, który był zamieszczony w jednym z poprzednich konspektów zajęć — rozszerz go o formularz zawierający trzy przyciski: "Set", "Delete" oraz "Add" </p>
<p> 2.Stwórz JavaScriptową wersję arkusza 'sheet.css' utworzonego na pierwszych ćwiczeniach — po naciśnięciu przycisku "Set" skrypt styluje elementy dokumentu HTML; w rezultacie powinniśmy więc otrzymać stronę o następującym wyglądzie </p>
<p> 3. Stwórz JavaScriptową wersję arkusza 'sheet.css' utworzonego na pierwszych ćwiczeniach — po naciśnięciu przycisku "Set" skrypt styluje elementy dokumentu HTML; w rezultacie powinniśmy więc otrzymać stronę o następującym wyglądzie </p>

<ul> 
  
  <li> Dostęp do zawartości dokumentu HTML należy uzyskać za pomocą metod DOM 4:
    <ul> 
      <li> document.getElementById()</li>
      <li> document.querySelector()</li>
      <li> document.getElementsByTagName()</li>
      <li> document.querySelectorAll()</li>
    </ul>
  </li>
  
  <li> Stylowanie należy zrealizować korzystając z własności 'element.style.własność' lub 'element.classList' — sterowania stylowaniem nie można zaimplementować poprzez podpięcie lub odpięcie arkusza 'sheet.css'</li>
  
  <li> Obsługę zdarzeń proszę zrealizować w oparciu o metodę addEventListener()</li>
 
</ul>

<h2> 2.2. Modyfikowanie zawartości strony WWW</h2>
<ul>
  <li> Treść koncertu Wojskiego na rogu ma być przechowywana w skrypcie</li>
  <li> Zawartość elementu main jest, początkowo, pusta</li>
  <li> Po kolejnych naciśnięciach klawisza "Add" pojawiają się kolejne akapity</li>
  <li> Jeżeli nie ma już nowych akapitów do wyświetlenia, to przycisk "Add" powinien zostać <a href="https://alvarotrigo.com/blog/disable-button-javascript/">dezaktywowany</a> </li>
</ul>

<p> Proszę nie używać innerHTML — należy korzystać z metod: createElement(), createTextNode(), appendChild() itp. </p>


<h2> 🏠 3. React</h2>

<p> 1. Zaznajom się z poniższymi przykładami — będą one przydatne 🙂 </p>

<p> Przykład 1 </p>

```HTML
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react/umd/react.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
    <title>
      Example 1
    </title>
  </head>
  <body>
    <div id="root">
      <!-- 
        Kontener dla komponentu. 
        React renderuje wyspecyfikowany kod HTML wewnątrz tzw. kontenera, 
        tj. wybranego przez nas elementu strony internetowej. 
        -->
    </div>
    <!-- Komponent 'Hello' -->
    <script type="text/babel">
        // Logika komponentu
        class Hello extends React.Component {
            render() {
                return <h1>Hello World!</h1>;
            }
        }
        const container = document.getElementById('root'); // Pobieranie referencji na kontener
        const root = ReactDOM.createRoot(container);       // Tworzenie korzenia React-a dla podanego kontenera
        root.render(<Hello />);                      // Renderowanie komponentu
    </script>
  </body>
</html>
```




<p> Przykład 2 </p>

```HTML
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react/umd/react.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
    <title>
      Example 2
    </title>
  </head>
  <body>
    <div id="root">
      <!-- 
        Kontener dla komponentu. 
        React renderuje wyspecyfikowany kod HTML wewnątrz tzw. kontenera, 
        tj. wybranego przez nas elementu strony internetowej. 
        -->
    </div>
    <!-- Komponent 'Hello' -->
    <script type="text/babel">
        // Logika komponentu
        class Hello extends React.Component {
            render() {
                {/* Wyświetlenie danych przekazanych za pomocą własności 'welcome' */ }
                return <h1>{this.props.welcome}</h1>;
            }
        }
        const container = document.getElementById('root'); // Pobieranie referencji na kontener
        const root = ReactDOM.createRoot(container);       // Tworzenie korzenia React-a dla podanego kontenera
        root.render(<Hello welcome="Hello World" />); // Renderowanie komponentu
    </script>
  </body>
</html>
```


<p> Przykład 3 </p>

```HTML
<!DOCTYPE html>
<html>
  <head>

    <script src="https://unpkg.com/react/umd/react.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
    <title>
      Example 3
    </title>
  </head>
  <body>
    <div id="root">
      <!-- 
        Kontener dla komponentu. 
        React renderuje wyspecyfikowany kod HTML wewnątrz tzw. kontenera, 
        tj. wybranego przez nas elementu strony internetowej. 
        -->
    </div>

    <pre id="output"></pre><!-- Komponent 'Hello' -->
    <script type="text/babel">
        // Logika komponentu
        class Hello extends React.Component {
            print = (event) => {
                let container = document.querySelector('#output');
                container.appendChild(document.createTextNode(this.props.welcome));
                container.appendChild(document.createElement('br'));
                container.appendChild(document.createTextNode(event._reactName));
                container.appendChild(document.createElement('br'));
            }
            render() {
                return <button onClick={this.print}>Click me</button>
            }
        }

        const container = document.getElementById('root'); // Pobieranie referencji na kontener
        const root = ReactDOM.createRoot(container);       // Tworzenie korzenia React-a dla podanego kontenera
        root.render(<Hello welcome="Hello World" />);      // Renderowanie komponentu
    </script>
  </body>
</html>
```


<p> Przykład 4 </p>

```HTML
<!DOCTYPE html>
<html>
  <head>

    <script src="https://unpkg.com/react/umd/react.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"
          crossorigin=""></script>
    <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
    <title>
      Example 4
    </title>
  </head>
  <body>
    <div id="root">
      <!-- 
        Kontener dla komponentu. 
        React renderuje wyspecyfikowany kod HTML wewnątrz tzw. kontenera, 
        tj. wybranego przez nas elementu strony internetowej. 
        -->
    </div>
    <!-- 
        Komunikacja pomiędzy komponentami 'EchoInput' a 'EchoOutput'.
        Aby mogły się komunikować, to musimy utworzyć komponent rodzicielski, tu "Echo' - będzie on przechowywał dane
    -->
    <script type="text/babel">
        // Komponent 'EchoInput' - odpowiada za wczytanie danych -->
        class EchoInput extends React.Component {
            constructor(props) {
                super(props);
                this.handleTextChange = this.handleTextChange.bind(this);
            }

            // Obserwator zdarzenia 'Change' - ta metoda jest wywoływana, gdy pojawi się zdarzenie 'Change' 
            handleTextChange(e) {
                this.props.handleTextChange(e.target.value); // Wywołuję metodę 'handleTextChange() zdefiniowaną w komponencie rodzicielskim 'Echo', w efekcie następuje przekazanie wczytanych danych z komponentu (potomnego) 'EchoInput' do komponentu rodzicielskiego 'Echo' 
            }

            render() {
                // Gdy wprowadzę nowy znak w '<input>, to generowane jest zdarzenie 'Change'
                // Informacje nt. zdarzeń — https://www.pluralsight.com/guides/use-plain-javascript-events-in-react
                return (
                    <input value={this.props.text} onChange={this.handleTextChange} />
                );
            }
        }

        // Komponent 'EchoOutput' - odpowiada za wypisanie wczytanych danych -->
        class EchoOutput extends React.Component {
            render() {
                // Komponent 'EchoOutput' odbiera przekazaną wartość (zmienna 'text'), z komponentu 'Echo', za pomocą obiektu 'props' 
                return (
                    <div> Output: {this.props.text}</div >
                );
            }
        }

        // Komponent 'Echo' -->
        class Echo extends React.Component {
            constructor(props) {
                super(props);
                this.handleTextChange = this.handleTextChange.bind(this);
                this.state = { text: '' }; // Zmienna stanowa 'text' - przechowuje wartość wczytaną za pomocą 'EchoInput'
            };

            // Metoda do modyfikacji zmiennej stanowej 'text' - będzie ona wywoływana z komponentu potomnego 'EchoInput'
            handleTextChange(newText) {
                this.setState({ text: newText });
            }

            render() {
                return (
                    <React.Fragment>
                        <h1>Komponent 'EchoInput'</h1>
                        <EchoInput text={this.state.text} handleTextChange={this.handleTextChange} />
                        <h1>Komponent 'EchoOutput'</h1>
                        {/* W celu przekazania wartości (zmiennej stanowej 'text') z komponentu rodzicielskiego 'Echo' do komponentu potomnego 'EchoOutput'. musimy użyć własności komponentu potomnego */}
                        <EchoOutput text={this.state.text} />
                    </React.Fragment>
                );
            }
        }

        const container = document.getElementById('root'); // Pobieranie referencji na kontener
        const root = ReactDOM.createRoot(container);       // Tworzenie korzenia React-a dla podanego kontenera
        root.render(<Echo />);                             // Renderowanie komponentu
    </script>
  </body>
</html>

```


<p> 2.Utwórz dwie, odrębne, wersje skryptu z zadania nr 1 — "Tworzenie animacji": </p>

<ol>
  <li> Dostęp do pól formularza oraz obsługa zdarzeń mają się odbywać za pomocą DOM 4, a nie DOM 0 ( czyli nie document.forms.elements, onClick)</li>
  <li> Wybrane elementy strony WWW mają być komponentami React — na potrzeby opisu wyróżniono je kolorem — jeżeli chcesz  😉, to możesz je ostylować (kolor)
     <ul> 
       <li>Komponenty w kolorze zielonym
Inkrementują i wyświetlają, co 1000 ms (użyć window.setTimeout() lub window.setInterval()), wartość wewnętrznego licznika </li>
       <li> Komponenty w kolorze szarym
Zawierają dwa komponenty potomne: jeden w kolorze żółtym, a drugi, czerwonym
 </li>
       <li> Komponenty w kolorze żółtym
Wypisują wynik obliczeń</li>
       <li> Komponenty w kolorze czerwonym
Wykonują, w wątku głównym lub roboczym (do wyboru), czasochłonne obliczenia dla podanej liczby iteracji</li>
    </ul>
  </li>

</ol>
