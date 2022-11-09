//NOTA: se haran comentarios en el primer case, para entender la logica del menu. En todos los otros casos funciona igual

$(document).ready(function () {
  //llamo a la funcion principal
  mostrardata();
  //funcion principal
  function mostrardata() {
    let opcion = parseInt(
      prompt(
        "Bienvenido a Cripto-Consulting!\n\nSelecciona la cripto que quieres consultar:\n1.BTCUSDT\n2.ETHUSDT\n3.BNBUSDT\n4.NEOUSDT\n5.LTCUSDT\n0.Salir"
      )
    );
    let cripto = "";
    let seleccion = 0;
    switch (opcion) {
      case 1:
        cripto = "BTCUSDT";
        seleccion = parseInt(
          prompt(
            "Selecciona la operacion que quieres realizar:\n1.Comprar\n2.Vender\n3.Consultar Precio\n0.Salir"
          )
        );
        if (seleccion == 1) {
          //nos lleva a la funcion de comprar cripto, hay que pasarle la cripto seleccionada
          comprarCripto(cripto);
        } else if (seleccion == 2) {
          let cantidad = 1;
          let tengo = 0;
          //este while es para impedir que el usuario seleccione una cantidad para vender, la cual no tiene
          while (cantidad > tengo) {
            tengo = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que usted tiene. (ejemplo 1)`
              )
            );
            cantidad = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que desea Vender (ejemplo 1)`
              )
            );
            if (cantidad > tengo) {
              alert(
                `Usted posee solo ${tengo} de ${cripto}. No le alcanza para vender ${cantidad}`
              );
            }
          }
          //una vez que selecciona la cantidad correcta, ya te envia a la opcion de vender cripto, pasandole como parametros la cantidad que dispone para vender y la cripto en cuestion
          if (tengo >= cantidad) {
            venderCripto(cripto, cantidad);
          }
        } else if (seleccion == 3) {
          //simplemente nos lleva a la funcion para consultar precio, pasandole el valor de la cripto
          consultarPrecio(cripto);
        } else if (seleccion == 0) {
          //si el usuario selecciona la opcion de cerrar, le agradece y lo saca del sistema
          alert("Gracias!");
        } else {
          //si el usuario ingresa una opcion no valida, en este caso lo retorna al menu inicial
          alert("No ingresaste ninguna opcion valida.");
          window.location.reload();
        }

        break;
      case 2:
        cripto = "ETHUSDT";
        seleccion = parseInt(
          prompt(
            "Selecciona la operacion que quieres realizar:\n1.Comprar\n2.Vender\n3.Consultar Precio\n0.Salir"
          )
        );
        if (seleccion == 1) {
          comprarCripto(cripto);
        } else if (seleccion == 2) {
          let cantidad = 1;
          let tengo = 0;
          while (cantidad > tengo) {
            tengo = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que usted tiene. (ejemplo 1)`
              )
            );
            cantidad = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que desea Vender (ejemplo 1)`
              )
            );
            if (cantidad > tengo) {
              alert(
                `Usted posee solo ${tengo} de ${cripto}. No le alcanza para vender ${cantidad}`
              );
            }
          }
          if (tengo >= cantidad) {
            venderCripto(cripto, cantidad);
          }
        } else if (seleccion == 3) {
          consultarPrecio(cripto);
        } else if (seleccion == 0) {
          alert("Gracias!");
        } else {
          alert("No ingresaste ninguna opcion valida.");
          window.location.reload();
        }

        break;
      case 3:
        cripto = "BNBUSDT";
        seleccion = parseInt(
          prompt(
            "Selecciona la operacion que quieres realizar:\n1.Comprar\n2.Vender\n3.Consultar Precio\n0.Salir"
          )
        );
        if (seleccion == 1) {
          comprarCripto(cripto);
        } else if (seleccion == 2) {
          let cantidad = 1;
          let tengo = 0;
          while (cantidad > tengo) {
            tengo = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que usted tiene. (ejemplo 1)`
              )
            );
            cantidad = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que desea Vender (ejemplo 1)`
              )
            );
            if (cantidad > tengo) {
              alert(
                `Usted posee solo ${tengo} de ${cripto}. No le alcanza para vender ${cantidad}`
              );
            }
          }
          if (tengo >= cantidad) {
            venderCripto(cripto, cantidad);
          }
        } else if (seleccion == 3) {
          consultarPrecio(cripto);
        } else if (seleccion == 0) {
          alert("Gracias!");
        } else {
          alert("No ingresaste ninguna opcion valida.");
          window.location.reload();
        }

        break;
      case 4:
        cripto = "NEOUSDT";
        seleccion = parseInt(
          prompt(
            "Selecciona la operacion que quieres realizar:\n1.Comprar\n2.Vender\n3.Consultar Precio\n0.Salir"
          )
        );
        if (seleccion == 1) {
          comprarCripto(cripto);
        } else if (seleccion == 2) {
          let cantidad = 1;
          let tengo = 0;
          while (cantidad > tengo) {
            tengo = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que usted tiene. (ejemplo 1)`
              )
            );
            cantidad = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que desea Vender (ejemplo 1)`
              )
            );
            if (cantidad > tengo) {
              alert(
                `Usted posee solo ${tengo} de ${cripto}. No le alcanza para vender ${cantidad}`
              );
            }
          }
          if (tengo >= cantidad) {
            venderCripto(cripto, cantidad);
          }
        } else if (seleccion == 3) {
          consultarPrecio(cripto);
        } else if (seleccion == 0) {
          alert("Gracias!");
        } else {
          alert("No ingresaste ninguna opcion valida.");
          window.location.reload();
        }

        break;
      case 5:
        cripto = "LTCUSDT";
        seleccion = parseInt(
          prompt(
            "Selecciona la operacion que quieres realizar:\n1.Comprar\n2.Vender\n3.Consultar Precio\n0.Salir"
          )
        );
        if (seleccion == 1) {
          comprarCripto(cripto);
        } else if (seleccion == 2) {
          let cantidad = 1;
          let tengo = 0;
          while (cantidad > tengo) {
            tengo = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que usted tiene. (ejemplo 1)`
              )
            );
            cantidad = parseInt(
              prompt(
                `Ingrese la cantidad de ${cripto} que desea Vender (ejemplo 1)`
              )
            );
            if (cantidad > tengo) {
              alert(
                `Usted posee solo ${tengo} de ${cripto}. No le alcanza para vender ${cantidad}`
              );
            }
          }
          if (tengo >= cantidad) {
            venderCripto(cripto, cantidad);
          }
        } else if (seleccion == 3) {
          consultarPrecio(cripto);
        } else if (seleccion == 0) {
          alert("Gracias!");
        } else {
          alert("No ingresaste ninguna opcion valida.");
          window.location.reload();
        }

        break;
      case 0:
        alert("Gracias!");
        break;
      default:
        alert("Opcion no valida");
        window.location.reload();
        break;
    }
  }
});

function comprarCripto(cripto) {
  //traemos la data desde binance para obtener los precios de las criptos
  let endpoint = "https://api.binance.com/api/v3/ticker/price";
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      //aca traemos los valores de los tipos de cambio, consultando la pagina dolarsi. Para este ejercicio solamente se tomo el valor del dolar blue
      let endpointtc =
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
      fetch(endpointtc)
        .then((response) => response.json())
        .then((datat) => {
          //le solicitamos al usuario que ingrese la cantidad de criptos que quiere comprar
          let cantidad = parseInt(
            prompt(
              `Ingrese la cantidad de ${cripto} que desea comprar (ejemplo 1)`
            )
          );

          let cambio = 0;
          let precio = 0;
          let preciocambio = 0;

          //Iteramos con el for para recorrer todo el Json
          for (let i = 0; i <= 1000; i++) {
            body = data[i].symbol;
            price = data[i].price;
            //El body contiene el simbolo de la criptomoneda, si es el mismo que le pasamos por parametro, ingresa al if para guardar el precio de la criptomoneda
            if (body == cripto) {
              precio = parseFloat(price);
            }
          }
          //iteramos sobre el json del tipo de cambio para obtener el valor del dolar blue
          for (let i = 0; i < 100; i++) {
            casa = datat[i].casa;
            tipo = casa["nombre"];
            preciocambio = casa["agencia"];
            //existen muchos tipos de cambio en argentina, si el tipo de cambio del json es igual a Dolar Blue, entra al if para guardar ese precio
            if (tipo === "Dolar Blue") {
              cambio = parseFloat(preciocambio);
              break;
            }
          }
          //hacemos la cuenta para determinar el precio final a abonar en pesos
          let preciofinal = cantidad * precio * parseFloat(preciocambio);
          //le informamos por alert al usuario el resultado
          alert(
            `Usted va a comprar ${cantidad} ${cripto} a un precio de USD ${precio} con un tipo de cambio Dolar Blue de $ ${preciocambio}. El total a abonar sera de $ ${preciofinal}`
          );
          //si desea continuar, el usuario podra elegir la opcion 1 para volver al menu inicial o cero para salir y navegar por la pagina
          let opcion = parseInt(
            prompt("Si deseas continuar ingresa 1. Para salir presiona 0")
          );
          if (opcion == 1) {
            window.location.reload();
          } else {
            alert("Gracias!");
          }
        })

        //   .then((data) => verPrecios(data))
        .catch((error) => console.log(error));
    })
    //   .then((data) => verPrecios(data))
    .catch((error) => console.log(error));
}

function venderCripto(cripto, cantidad) {
  //se consulta la api de binance pra obtener la data de las cripto
  let endpoint = "https://api.binance.com/api/v3/ticker/price";
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      //una vez que obtengo la data de las cripto, busco la data del tipo de cambio
      let endpointtc =
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
      fetch(endpointtc)
        .then((response) => response.json())
        .then((datat) => {
          let cambio = 0;
          let precio = 0;
          let preciocambio = 0;
          //itero sobre el json de las cripto para obtejer el precio en cuestion
          for (let i = 0; i <= 1000; i++) {
            body = data[i].symbol;
            price = data[i].price;
            //si el nombre de la cripto del json coincide del que le pasamos por parametro, guarda el precio
            if (body == cripto) {
              precio = parseFloat(price);
            }
          }
          //recorre el json para obtener el tipo de cambio
          for (let i = 0; i < 100; i++) {
            casa = datat[i].casa;
            tipo = casa["nombre"];
            preciocambio = casa["agencia"];
            //si el tipo de cambio es igual a dolar blue, lo guarda en la variable cambio
            if (tipo === "Dolar Blue") {
              cambio = parseFloat(preciocambio);
              break;
            }
          }
          //aca hacemos el calculo de la cantidad a vender por el precio en dolares, por el precio con el tipo de cambio obtenido
          let preciofinal = cantidad * precio * parseFloat(preciocambio);
          //informamos al usuario el resultado
          alert(
            `Usted va a vender ${cantidad} ${cripto} a un precio de USD ${precio} con un tipo de cambio Dolar Blue de $ ${preciocambio}. El total a abonar sera de $ ${preciofinal}`
          );
          //le preguntamos si quiere seguir o irse
          let opcion = parseInt(
            prompt("Si deseas continuar ingresa 1. Para salir presiona 0")
          );
          if (opcion == 1) {
            //si quiere quedarse, la pagina se recarga para volver al inicio
            window.location.reload();
          } else {
            alert("Gracias!");
          }
        })

        //   .then((data) => verPrecios(data))
        .catch((error) => console.log(error));
    })
    //   .then((data) => verPrecios(data))
    .catch((error) => console.log(error));
}

function consultarPrecio(cripto) {
  //consulta la api de binance para obtener darta de la cripto pasada por parametro
  let endpoint = "https://api.binance.com/api/v3/ticker/price";
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      //obtiene la data de los tipos de cambio
      let endpointtc =
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
      fetch(endpointtc)
        .then((response) => response.json())
        .then((datat) => {
          let cambio = 0;
          let precio = 0;
          let preciocambio = 0;

          // let opcion = parseInt(prompt("S"))
          //en este for recorre el json de binance para obtener el precio de la cripto
          for (let i = 0; i <= 1000; i++) {
            body = data[i].symbol;
            price = data[i].price;
            //body contiene la info del simbolo, si es igual a la variable cripto enviada por parametro, entra al if para guardar el precio de la cripto
            if (body == cripto) {
              precio = parseFloat(price);
            }
          }
          //aca recorremos el json de los valores de de los tipos de cambio
          for (let i = 0; i < 100; i++) {
            casa = datat[i].casa;
            tipo = casa["nombre"];
            preciocambio = casa["agencia"];
            //la variable tipo contiene el nombre del tipo de cambio, si es igual a dolar blue, entra al if para guardar el tipo de cambio
            if (tipo === "Dolar Blue") {
              cambio = parseFloat(preciocambio);
              break;
            }
          }
          // hacemos la cuenta pra obtener el valor final en pesos
          preciofinal = precio * preciocambio;
          //informamos al usuario el resultado
          alert(
            `El precio de ${cripto} es de USD ${precio} en pesos a un tipo de cambio de dolar blue de $ ${preciocambio} quedaria en $ ${preciofinal} `
          );
          // si quiere salir recargamos la web
          let opcion = parseInt(
            prompt("Si deseas continuar ingresa 1. Para salir presiona 0")
          );
          if (opcion == 1) {
            window.location.reload();
          } else {
            alert("Gracias!");
          }
        })

        //   .then((data) => verPrecios(data))
        .catch((error) => console.log(error));
    })
    //   .then((data) => verPrecios(data))
    .catch((error) => console.log(error));
}
