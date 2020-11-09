// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  nome: "Marco",
  cognome: "Rossi",
  eta: 25,
};

console.log(studente);

for (var key in studente) {
  console.log(key + " : " + studente[key]);
}

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var studenti = [
  {
    nome: "Flavio",
    cognome: "Servanti",
    classe: 21,
    eta: 26,
  },
  {
    nome: "Maurizio",
    cognome: "Vialli",
    classe: 22,
    eta: 20,
  },
  {
    nome: "Vincenzo",
    cognome: "Chiasso",
    classe: 21,
    eta: 22,
  },
  {
    nome: "Giovanni",
    cognome: "Bassi",
    classe: 20,
    eta: 28,
  },
  {
    nome: "Dario",
    cognome: "Balestri",
    classe: 21,
    eta: 26,
  },
];

//ciclo for per stampare nome e cognome di tutti gli studenti

for (var chiave in studenti) {
  console.log(studenti[chiave].nome + " " + studenti[chiave].cognome);
}

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

askStudent(); // invoco la funzione con i 3 prompt

console.log(studenti);

/* ================================ FUNZIONI GENERALI ================================================================ */

//funzione che chiede dati studente da inserire

function askStudent() {
  var nome;
  var cognome;

  nome = prompt("Nome studente");
  cognome = prompt("Cognome studente");
  var eta;
  // controllo e loop finchè età non è valida
  while (eta < 18 || eta > 50 || isNaN(eta)) {
    eta = parseInt(prompt("Età studente"));
    alert("Età non valida, riprova");
  }
  studenti.push({ nome, cognome, eta }); // pusho dentro l'array studenti (precedentemente creato) i nuovi dati (oggetto)
}
