let paragrafo = document.getElementById("timer");
let i = 0;
setInterval(conta, 1000);

function conta() {
  i = i + 1; //i++
  paragrafo.innerText = i + " numero secondi passati";
  sessionStorage.setItem("count", i);
}
