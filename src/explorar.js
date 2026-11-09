const ventas = require("./datos.js");


//Mostrar la cantidad de registros

console.log("Cantidad de registros: " + ventas.length);

//mostrar el primer registro
console.log("Primer registro: ");
console.log(ventas[0]);

//mostrar el último registro
console.log("Último registro: ");
console.log(ventas[ventas.length - 1]);

//mostrar la propiedad producto del registro en la posición 4
console.log("Producto del registro en la posición 4: " + ventas[3].producto);

//tabla completa con colsole.table
console.table(ventas);
