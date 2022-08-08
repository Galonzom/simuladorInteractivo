let menuElegido = parseInt(prompt("Ingrese un numero del menu:"));

function seleccionMenu(){
  switch (menuElegido) {
    case 1:
      document.write("<br>****Ingreso a la Aplicacion</br>");
      break;
    case 2:
      document.write("<br>**** Ingreso a Resultados</br>");
      break;
    case 3:
      document.write("<br>**** Ingreso a Ejercicio</br>");
      break;
    case 4:

      document.write("<br>**** Salio del menu</br>");
      break;
    default:

      alert("Ingrese un numero valido!");
      location.reload();
  }
}



seleccionMenu();

