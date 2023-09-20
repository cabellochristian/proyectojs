class Empleado {
    constructor(nombre, edad, departamento, proyectos, habilidades) {
        this.nombre = nombre;
        this.edad = edad;
        this.departamento = departamento;
        this.proyectos = proyectos;
        this.habilidades = habilidades;
    }
}

let empleados = [
    new Empleado("Juan", 30, "Ventas", ["Proyecto A", "Proyecto B"], ["Ventas", "Comunicación"]),
    new Empleado("Maria", 28, "Recursos Humanos", ["Proyecto C"], ["Gestión de Personal"]),
    new Empleado("Carlos", 35, "Tecnología", ["Proyecto D", "Proyecto E"], ["Desarrollo Web", "Programación"]),
    new Empleado("Ana", 40, "Finanzas", ["Proyecto F"], ["Contabilidad", "Finanzas"]),
];

let acceso = prompt("Si quieres acceder a la lista de empleados, ingresa la contraseña:");

while (acceso !== "1234") {
    alert("Clave incorrecta. Ingresa una clave correcta para acceder.");
    acceso = prompt("Si quieres acceder a la lista de empleados, ingresa la contraseña:");
}

let opcion;

while (acceso === "1234") {
    opcion = parseInt(prompt("Selecciona una opción:\n1. Mostrar detalles de un empleado por nombre\n2. Filtrar empleados por departamento\n3. Obtener lista de proyectos\n4. Calcular edad promedio\n5. Salir"));

    switch (opcion) {
        case 1:
            const nombreEmpleado = prompt("Ingresa el nombre del empleado:");
            buscarEmpleadoPorNombre(nombreEmpleado);
            break;
        case 2:
            const departamentoEmpleado = prompt("Ingresa el departamento:");
            filtrarEmpleadosPorDepartamento(departamentoEmpleado);
            break;
        case 3:
            obtenerListaDeProyectos();
            break;
        case 4:
            calcularEdadPromedio();
            break;
        case 6:
            acceso = prompt("Si quieres acceder a la lista de empleados, ingresa la contraseña:");
            break;
        default:
            alert("Selecciona una opción válida o 5 para salir.");
    }
}

function buscarEmpleadoPorNombre(nombre) {
    const empleadoEncontrado = empleados.find(empleado => empleado.nombre === nombre);
    if (empleadoEncontrado) {
        mostrarDetalleEmpleado(empleadoEncontrado);
    } else {
        alert(`No se encontró ningún empleado con el nombre ${nombre}`);
    }
}

function filtrarEmpleadosPorDepartamento(departamento) {
    const empleadosFiltrados = empleados.filter(empleado => empleado.departamento === departamento);
    if (empleadosFiltrados.length > 0) {
        empleadosFiltrados.forEach(empleado => mostrarDetalleEmpleado(empleado));
    } else {
        alert(`No se encontraron empleados en el departamento ${departamento}`);
    }
}

function obtenerListaDeProyectos() {
    const proyectos = [];
    empleados.forEach(empleado => {
        proyectos.push(...empleado.proyectos);
    });
    const proyectosUnicos = [...new Set(proyectos)];
    alert(`Lista de proyectos:\n${proyectosUnicos.join('\n')}`);
}

function obtenerListaDeEmpleados() {
    const proyectos = [];
    empleados.forEach(empleado => {
        proyectos.push(...empleado.proyectos);
    });
    const proyectosUnicos = [...new Set(proyectos)];
    alert(`Lista de proyectos:\n${proyectosUnicos.join('\n')}`);
}

function calcularEdadPromedio() {
    const edades = empleados.map(empleado => empleado.edad);
    const sumaEdades = edades.reduce((total, edad) => total + edad, 0);
    const promedioEdad = sumaEdades / empleados.length;
    alert(`Edad promedio de los empleados: ${promedioEdad.toFixed(2)}`);
}

function mostrarDetalleEmpleado(empleado) {
    alert(`Nombre: ${empleado.nombre}\nEdad: ${empleado.edad}\nDepartamento: ${empleado.departamento}`);
    
    alert("Proyectos:");
    empleado.proyectos.forEach((proyecto, index) => {
        alert(`${index + 1}. ${proyecto}`);
    });

    alert("Habilidades:");
    empleado.habilidades.forEach((habilidad, index) => {
        alert(`${index + 1}. ${habilidad}`);
    });
}