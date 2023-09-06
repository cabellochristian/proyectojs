class Empleado {
    constructor(nombre, edad, departamento) {
        this.nombre = nombre;
        this.edad = edad;
        this.departamento = departamento;
    }
}

let empleados = [
    new Empleado("Juan", 30, "Ventas"),
    new Empleado("María", 28, "Recursos Humanos"),
    new Empleado("Carlos", 35, "Tecnología"),
    new Empleado("Ana", 40, "Finanzas"),
];

let acceso = prompt("Si quieres acceder a la lista de empleados, ingresa la contraseña:");

while (acceso !== "1234") {
    alert("Clave incorrecta. Ingresa una clave correcta para acceder.");
    acceso = prompt("Si quieres acceder a la lista de empleados, ingresa la contraseña:");
}

let seleccion;

while (acceso === "1234") {
    seleccion = parseInt(prompt("Selecciona al empleado al que quieres acceder:\n1. Juan\n2. María\n3. Carlos\n4. Ana\n5. Salir"));

    if (seleccion >= 1 && seleccion <= 4) {
        mostrarDetalleEmpleado(empleados[seleccion - 1]);
    } else if (seleccion === 5) {
        acceso = prompt("Si quieres acceder a la lista de empleados, ingresa la contraseña:");
    } else {
        alert('Selecciona un número válido o 5 para salir.');
    }
}

function mostrarDetalleEmpleado(empleado) {
    for (let key in empleado) {
        alert(key + ": " + empleado[key]);
    }
}