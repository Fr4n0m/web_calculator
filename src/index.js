var num1 = "";
var num2 = "";
var operation = "";

function init() {
  var result = document.getElementById("result");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var reset = document.getElementById("reset");
  var equal = document.getElementById("equal");
  var punto = document.getElementById("punto");

  uno.onclick = function (e) {
    result.textContent = result.textContent + "1";
  };
  dos.onclick = function (e) {
    result.textContent = result.textContent + "2";
  };
  tres.onclick = function (e) {
    result.textContent = result.textContent + "3";
  };
  cuatro.onclick = function (e) {
    result.textContent = result.textContent + "4";
  };
  cinco.onclick = function (e) {
    result.textContent = result.textContent + "5";
  };
  seis.onclick = function (e) {
    result.textContent = result.textContent + "6";
  };
  siete.onclick = function (e) {
    result.textContent = result.textContent + "7";
  };
  ocho.onclick = function (e) {
    result.textContent = result.textContent + "8";
  };
  nueve.onclick = function (e) {
    result.textContent = result.textContent + "9";
  };
  cero.onclick = function (e) {
    result.textContent = result.textContent + "0";
  };
  punto.onclick = function (e) {
    result.textContent = result.textContent + ".";
  };

  reset.onclick = function (e) {
    resetear();
  };

  suma.onclick = function (e) {
    num1 = result.textContent;
    operation = "+";
    clear();
  };

  resta.onclick = function (e) {
    num1 = result.textContent;
    operation = "-";
    clear();
  };

  multiplicacion.onclick = function (e) {
    num1 = result.textContent;
    operation = "*";
    clear();
  };

  division.onclick = function (e) {
    num1 = result.textContent;
    operation = "/";
    clear();
  };

  equal.onclick = function (e) {
    num2 = result.textContent;
    solve();
  };
}

function clear() {
  result.textContent = "";
}

function resetear() {
  num1 = 0;
  num2 = 0;
  operation = "";
  result.textContent = "";
}

function solve() {
  var res = 0;
  switch (operation) {
    case "+":
      res = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      res = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      res = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      res = parseFloat(num1) / parseFloat(num2);
      if (num2 == 0) {
        alert("Error! No se puede dividir por cero.");
        clear();
      }
  }
  resetear();
  result.textContent = res;
}

//DarkMode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");

  const isDarkModeEnabled = body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkModeEnabled);

  document.documentElement.classList.toggle("dark", isDarkModeEnabled);
}

document.addEventListener("DOMContentLoaded", function () {
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";
  const body = document.body;
  if (isDarkModeEnabled) {
    body.classList.add("dark");
  }

  init();
});
