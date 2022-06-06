// simulador interactivo
function saludar() {
  let usuario = prompt("ingrese su usuario");
  let password = prompt("ingrese su contraseña");
  if (usuario !== "" || password !== "") {
    alert("Bienvenido al mercado de pases de River Plate " + usuario);
  } else {
    alert("no ingreso datos");
    saludar();
  }
}

saludar();

let jugadores;
let confirm;

function comienzo() {
  jugadores = prompt(
    "Compra a tu jugador \n 1- Julian Alvarez \n 2- Esequiel Barco \n 3- Franco Armani \n 4-Enzo Fernandez \n 5- Milton Casco "
  );
  switch (jugadores) {
    case "1":
      alert("Elegiste a Julian Alvarez");
      confirm = prompt(
        "Valor $25000000 \n escriba SI para comprar o NO para cancelar"
      );
      compra(confirm);
      break;
    case "2":
      alert("Elegiste a Esequiel Barco");
      confirm = prompt(
        "Valor $5000000 \n escriba SI para comprar o NO para cancelar"
      );
      compra(confirm);
      break;
    case "3":
      alert("Elegiste a Franco Armani");
      confirm = prompt(
        "Valor $6000000 \n escriba SI para comprar o NO para cancelar"
      );
      compra(confirm);
      break;
    case "4":
      alert("Elegiste a Enzo Fernandez");
      confirm = prompt(
        "Valor $30000000 \n escriba SI para comprar o NO para cancelar"
      );
      compra(confirm);
      break;
    case "5":
      alert("Elegiste a Milton Casco");
      confirm = prompt(
        "Valor $4000000 \n escriba SI para comprar o NO para cancelar"
      );
      compra(confirm);
      break;
    default:
      alert("Elegi un jugador valido");
      break;
  }
}

function compra(confirm) {
  if (confirm.toUpperCase() === "SI") {
    alert("compra realizada");
  } else {
    alert("rechazo su compra");
  }
}

comienzo();