$(document).ready(function () {
    let clientes = [
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
        {
            nombre: "Tiger Nixon",
            cargo: "System Architect",
            ciudad: "Santiago",
            edad: 35,
            nacimiento: "2011-04-25",
            sueldo: "$320,800",
        },
    ];

    (function main() {
        let acumulador = "";
        clientes.forEach((cliente) => {
            acumulador += `
            <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.cargo}</td>
                <td>${cliente.ciudad}</td>
                <td>${cliente.edad}</td>
                <td>${cliente.nacimiento}</td>
                <td>${cliente.sueldo}</td>
            </tr>
        `;
        });

        $("#datos").html(acumulador);
        $("#example").DataTable();
    })();
});
