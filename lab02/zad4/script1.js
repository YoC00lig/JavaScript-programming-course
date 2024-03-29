let db;
const form = document.getElementById("formToLentVehicle");
const request = window.indexedDB.open("myDB", 1); // baza danych zapisująca dane z formularza "wypozycz"

request.onupgradeneeded = function(event) { //  wywolywana tylok kiedy baza danych jest tworzona lub zmieniamy wersję
  db = event.target.result;
  const objectStore = db.createObjectStore("carRentals", { keyPath: "id", autoIncrement: true }); // autoIncrement - automatycznie zostanie przypisany nowy i unikalny numer identyfikacyjny.
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("phone", "phone", { unique: false });
  objectStore.createIndex("carModel", "carModel", { unique: false });
  objectStore.createIndex("carMake", "carMake", { unique: false });
  objectStore.createIndex("startDate", "startDate", { unique: false });
  objectStore.createIndex("endDate", "endDate", { unique: false });
  objectStore.createIndex("vehicleType", "vehicleType", { unique: false });
  objectStore.createIndex("imageUrl", "imageUrl", { unique: false });
};

request.onsuccess = function(event) { // wywoływane po pomyślnym otwarciu bazy danych lub wykonaniu operacji na bazie danych IndexedDB.
  db = event.target.result;
};

// zapis danych z formularza do bazy danych
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const transaction = db.transaction(["carRentals"], "readwrite"); // readwrite - zeby transakcja mogla zarowno odczytac i zapisac do magazynu
  const objectStore = transaction.objectStore("carRentals"); // objectStore() - aby uzyskać dostęp do magazynu. 
  // dzieki temu mozna bedzie do magazynu dodwac, pobierac i usuwac dane z magazynu carRentals

  const rental = { // odczytanie danych z formularza
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    carModel: form.elements.carModel.value,
    carMake: form.elements.carMake.value,
    startDate: form.elements.startDate.value,
    endDate: form.elements.endDate.value,
    vehicleType: form.elements.vehicleType.value,
    imageUrl: form.elements.imageUrl.value
  };

  const request = objectStore.add(rental);

  request.onsuccess = function(event) {
    console.log("Dane zostały zapisane w bazie danych.");
    form.reset();
  };

  request.onerror = function(event) {
    console.log("Wystąpił błąd podczas zapisywania danych w bazie danych.");
  };
});
 
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');

startDate.addEventListener('change', () => {
  const minDate = new Date(startDate.value);
  minDate.setDate(minDate.getDate() + 1);
  endDate.min = minDate.toISOString().split('T')[0]; // ISO String (w formacie 
  //YYYY-MM-DDTHH:mm:ss.sssZ). Następnie używa metody 
  // split() z argumentem 'T' aby podzielić wartość 
  // na dwie części: część daty i część czasu.
  // Następnie bierze tylko część daty za pomocą indeksu [0]
});


var logo = document.getElementById('logo');
var ctx = logo.getContext('2d');   

function draw(){
    // prostokąt 
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(10,20,150,30);

    // koło
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(150, 90, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
    
    // trójkąt
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.moveTo(100, 100);
    ctx.lineTo(30, 50);
    ctx.lineTo(20, 130);
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
}