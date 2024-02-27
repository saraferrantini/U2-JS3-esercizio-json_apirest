// 1.☑️FUNZIONE CHIAMATA CHECK (per controllare se un nome utente è stato memorizzato nella localStorage,
// Se è stato memorizzato un nome utente, visualizza un messaggio che include il nome utente, altrimenti non visualizza nulla.)

const check = function () {
  // condizione  che controlla se c'è qualcosa salvato nella localStorage con la chiave "usr".
  if (localStorage.getItem("usr")) {
    // Se c'è un valore salvato con la chiave "usr" nella localStorage, viene creato un messaggio
    txt = "ciao " + localStorage.getItem("usr");
  }
  //   Aggiorna il contenuto HTML dell'elemento con classe "title".
  //   Se è stato trovato un valore nella localStorage, il testo che include quel valore verrà visualizzato all'interno dell'elemento .title
  document.querySelector(".title").innerHTML = txt;
};

// 2.☑️FUNZIONE PER SALVARE (è responsabile di recuperare il valore inserito dall'utente nell'input, salvarlo nella
//  localStorage e quindi richiamare la funzione check per aggiornare l'interfaccia utente di conseguenza.)

const save = function () {
  // Recupera il valore inserito nell'input con l'id "usr .value restituisce il valore attualmente inserito in quell'input.
  let usr = document.getElementById("usr").value;
  //   per salvare il valore usr con la chiave "usr" nella localStorage. In questo modo, il valore dell'input viene
  //   memorizzato per un utilizzo futuro, ad esempio anche dopo che la pagina è stata ricaricata o chiusa e riaperta
  localStorage.setItem("usr", usr);
  //   check è responsabile di aggiornare l'elemento HTML con classe "title" in base ai dati salvati nella localStorage.
  check();
};

// 3.☑️FUNZIONE PER CANCELLARE
const deleteData = function () {
  //  Rimuove l'elemento memorizzato nella localStorage con la chiave "usr".
  localStorage.removeItem("usr");

  //  Cancella il testo inserito nell'input con id "usr"
  document.getElementById("usr").value = ""; // Cancella il testo inserito nell'input
  document.querySelector(".title").innerHTML = ""; // Cancella il contenuto dell'elemento con classe "title"
};

window.onload = check;
