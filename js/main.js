let edad = prompt("Ingresa tu edad");
let espacio = " "

if (edad == "") {
  alert("No ingresaste tu edad");
}
else if (edad < 18) {
  alert("Eres menor de edad, sal de esta página");
}
else {
  alert("Tienes " + edad + espacio + "años, bienvenido!!!");
}
