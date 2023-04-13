/* let fechaNacimiento = moment("1990-01-01");

let fecha = document.querySelector("#fecha");

fecha.innerText = fechaNacimiento.format("DD-MM-YYYY");

let calendario = document.getElementById("calendario");

calendario.addEventListener("change", function () {
    let fechaAgendada = moment(calendario.value);
    let fechaHoy = moment();
    let diferencia = fechaAgendada.diff(fechaHoy, "days");
    console.log(diferencia);
    if (diferencia < 0) {
        alert("No puedo elegir una fecha inferior a la fecha actual.");
        reserva.value = fechaHoy.format("YYYY-MM-DD");
    } else {
        reserva.value = fechaAgendada = calendario.value;
        fechaPedido.innerText = diferencia;
    }
});
 */

let fechaNacimiento = moment("1990-01-01");

let fecha = document.querySelector("#fecha");
fecha.innerText = fechaNacimiento.format("DD-MM-YYYY");
