import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  let num1 = "";
  let num2 = "";
  let operation = "";

  useEffect(() => {
    function init() {
      const result = document.getElementById("result");
      const uno = document.getElementById("uno");
      const dos = document.getElementById("dos");
      const tres = document.getElementById("tres");
      const cuatro = document.getElementById("cuatro");
      const cinco = document.getElementById("cinco");
      const seis = document.getElementById("seis");
      const ocho = document.getElementById("ocho");
      const nueve = document.getElementById("nueve");
      const cero = document.getElementById("cero");
      const suma = document.getElementById("suma");
      const resta = document.getElementById("resta");
      const multiplicacion = document.getElementById("multiplicacion");
      const division = document.getElementById("division");
      const reset = document.getElementById("reset");
      const equal = document.getElementById("equal");
      const punto = document.getElementById("punto");

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
      const result = document.getElementById("result");
      result.textContent = "";
    }

    function resetear() {
      num1 = 0;
      num2 = 0;
      operation = "";
      const result = document.getElementById("result");
      result.textContent = "";
    }

    function solve() {
      var res = 0;
      const result = document.getElementById("result");
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

    init();
  }, []);

  return (
    <>
      <Head>
        <title>Web Calculator</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div class="flex justify-center items-center h-screen bg-yellow dark:bg-purple-dark dark:text-gray-light text-[#4F4D51]">
        <div class="container h-[550px] w-[450px] rounded-4xl flex justify-center items-center bg-[#4F4D51] dark:bg-[#121212] border-[4px] border-[#00000083] dark:border-black">
          <div class="container-inner h-[500px] w-[400px] rounded-2xl flex flex-col items-center bg-[#7F8182] dark:bg-[#29282a] border-[4px] border-[#5e5f60] dark:border-[#1e1d1f]">
            <div class="screen overflow-x-scroll h-[90px] w-[330px] rounded-xl my-6 p-[14px] bg-[#00D08E] border-[4px] border-[#196b51] dark:border-[#185240] dark:bg-[#189a71] flex justify-end items-end">
              <span class="text-2xl" id="result"></span>
            </div>
            <div class="buttons grid grid-cols-4 gap-4">
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="siete"
                value="7"
              >
                <span class="text-2xl">7</span>
              </button>
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="ocho"
                value="8"
              >
                <span class="text-2xl">8</span>
              </button>
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="nueve"
                value="9"
              >
                <span class="text-2xl">9</span>
              </button>
              <button
                class="focus:bg-[#8b8b8b] dark:focus:bg-[#3c3c3c] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="division"
                value="/"
              >
                <span class="text-2xl">÷</span>
              </button>

              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="cuatro"
                value="4"
              >
                <span class="text-2xl">4</span>
              </button>
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="cinco"
                value="5"
              >
                <span class="text-2xl">5</span>
              </button>
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="seis"
                value="6"
              >
                <span class="text-2xl">6</span>
              </button>
              <button
                class="focus:bg-[#8b8b8b] dark:focus:bg-[#3c3c3c] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="multiplicacion"
                value="*"
              >
                <span class="text-2xl">×</span>
              </button>

              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="uno"
                value="1"
              >
                <span class="text-2xl">1</span>
              </button>
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="dos"
                value="2"
              >
                <span class="text-2xl">2</span>
              </button>
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="tres"
                value="3"
              >
                <span class="text-2xl">3</span>
              </button>
              <button
                class="focus:bg-[#8b8b8b] dark:focus:bg-[#3c3c3c] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="resta"
                value="-"
              >
                <span class="text-2xl">-</span>
              </button>

              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="cero"
                value="0"
              >
                <span class="text-2xl">0</span>
              </button>
              <button
                class="active:bg-[#6f6f6f] dark:active:bg-[#6f6f6f] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="punto"
                value="."
              >
                <span class="text-2xl">.</span>
              </button>
              <button
                class="active:bg-[#F05E2C] dark:active:bg-red transition-all bg-[#F05E2C] hover:bg-[#D13400] dark:bg-red dark:hover:bg-red-dark h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="equal"
                value="="
              >
                <span class="text-2xl">=</span>
              </button>
              <button
                class="focus:bg-[#8b8b8b] dark:focus:bg-[#3c3c3c] transition-all bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] h-[70px] w-[70px] p-6 rounded-xl flex items-center justify-center"
                id="suma"
                value="+"
              >
                <span class="text-2xl">+</span>
              </button>

              <button
                id="reset"
                value="C"
                class="bg-[#C2C3C1] hover:bg-[#A4A5A4] dark:bg-[#6d6d6d] dark:hover:bg-[#3c3c3c] border-[#4F4D51] text-[#4F4D51] dark:text-gray-light dark:hover:border-gray-light hover:border-4 dark:hover:border-4 h-[60px] w-[60px] p-6 rounded-xl absolute top-[305px] right-[410px] flex items-center justify-center transition-all"
              >
                <span class="text-2xl">C</span>
              </button>
            </div>
          </div>
        </div>

        <label
          for="darkModeSwitch"
          class=" switch absolute top-[160px] right-[410px] "
        >
          <input
            type="checkbox"
            id="darkModeSwitch"
            onchange="toggleDarkMode()"
          />
          <span class="slider"></span>
        </label>
      </div>
    </>
  );
};

export default Home;
