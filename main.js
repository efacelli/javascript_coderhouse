
/*simulador de notas*/

let alumno = prompt("Ingrese el nombre del alumno");
let nota = parseInt(prompt("Cual es la nota de: " + alumno));

if (nota >= 6) {
    alert(alumno + " está aprobado")
} else if (nota < 6) {
    alert(alumno + " desaprobó")
}

/*simulador de calculadora con switch*/

function sumar(num1, num2) {
    return num1 + num2;
  }
  
  function restar(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  function dividir(num1, num2) {
    return num1 / num2;
  }
  
  let operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /)");
  let num1 = parseFloat(prompt("Ingrese el primer número"));
  let num2 = parseFloat(prompt("Ingrese el segundo número"));
  

  switch (operacion) {
    case "+":
      console.log(sumar(num1, num2));
      break;
    case "-":
      console.log(restar(num1, num2));
      break;
    case "*":
      console.log(multiplicar(num1, num2));
      break;
    case "/":
      console.log(dividir(num1, num2));
      break;
    default:
      console.log("Operación inválida");
  }