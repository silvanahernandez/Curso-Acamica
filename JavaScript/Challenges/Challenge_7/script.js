/*
 * Función que solicita el número de iteraciones, es decir, cantidad de números
 * que desea ingresar el usuario. Esto se guarda en la variable length y se
 * retorna siempre y cuando la entrada sea válida.
 */
function getLength() {
  let length;
  let validInput = false;

  do {
    let infoMsg = "Ingrese la cantidad de números que desea iterar.";
    infoMsg += '\nEscribir "salir" para terminar proceso.';

    length = prompt(infoMsg);

    // En caso de que se presione el botón "cancelar".
    if (length === "" || length === null) {
      return -1;
    }

    // En caso de que se escriba la palabra "salir".
    length = length.toLowerCase();
    if (length === "salir") {
      return -1;
    }

    length = parseInt(length);
    if (isNaN(length)) {
      alert("Sólo se aceptan carácteres numéricos.");
    } else if (length < 0) {
      alert("Debes ingresar un número positivo.");
    } else {
      validInput = true;
    }
  } while (!validInput);

  return length;
}

/*
 * Función que recibe la entrada de cada uno los números que serán sumados y
 * finalmente divididos para obtener el promedio. Únicamente se retorna el
 * valor si la entrada es válida, es decir no es nulo o un caracter no numérico
 */
function getNumber(i) {
  let num;
  let validInput = false;

  do {
    num = parseInt(prompt(`Ingresa el valor ${i + 1}:`));

    if (num === "" || num === null) {
      alert("Debes ingresar todos los números antes de salir.");
    } else if (isNaN(num)) {
      alert("Sólo se aceptan carácteres numéricos.");
    } else {
      validInput = true;
    }
  } while (!validInput);

  return num;
}

/*
 * Función que solicita los números para obtener el promedio. La cantidad de
 * números a solicitar será la que haya ingresado el usuario y está determinada
 * por la variable length.
 */
function getAverage(length) {
  let totalSum = 0;

  // Pide "n" cantidad de números al usuario.
  for (let i = 0; i < length; i++) {
    let currentNum = getNumber(i); // Solicita un número en cada iteración.
    totalSum += currentNum;
  }

  let average = totalSum / length;

  alert(`El promedio de los números es: ${average.toFixed(2)}`);
}

// Solicita la cantidad de iteraciones al usuario.
let length = getLength();

/*
 * Si la variable length es igual a -1 significa que el usuario cancelo el
 * proceso, en caso contrario su valor será igual al número de iteraciones que
 * se desean o dicho de otra manera cantidad de números a ingresar.
 */
if (length !== -1) {
  // Si se ingreso la cantidad de números entonces calcular el promedio.
  getAverage(length);
}

