var animation;
var i = 0;


/// Zdefiniowanie funkcji onmessage, która jest wywoływana
// w momencie otrzymania wiadomości z głównego wątku
// przez metodę postMessage.

onmessage = function(e) {
  const iterations = e.data;
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
  postMessage(primes);
};
