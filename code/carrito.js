


var saldoText = document.querySelector("#cuenta h2");
var saldo = 800000; // este es un ejemplo de saldo a favor predeterminado

saldoText.textContent = "Su saldo a favor es: $" + saldo;



var banco = 10000000;
function ingresar() {
    let dinero = prompt("Cuanta cantidad deseas retirar. Tu saldo de banco es: $" + banco);

    if (isNaN(dinero) || dinero.trim().length === 0) {
        alert("No has ingresado nada o has ingresado caracteres. Favor de ingresar una cantidad y numeros");
    } else if (dinero > banco) {
        alert("Te has pasado de la cantidad que tienes en el banco.");
    } else if (dinero <= banco) {
        let dineroActualBanco = banco - dinero;
        let retiro = saldo + parseInt(dinero); // corregimos la suma
        saldo = retiro; // Actualiza la variable `saldo`
        banco = dineroActualBanco; // Actualiza el valor del banco

        saldoText.textContent = "Su saldo a favor es: $" + saldo;

        alert("Se te ha retirado correctamente el dinero. Tu saldo actual es: $" + saldo + " Tu dinero del banco actual es: $" + dineroActualBanco);
    } else {
        alert("Ya no tienes más saldo suficiente.");
    }
}





var precioAuto1 = 0;
var precioAuto2 = 0;
var precioAuto3 = 0;
var precioAuto4 = 0;
var precioAuto5 = 0;


var precioMoto1 = 0
var precioMoto2 = 0
var precioMoto3 = 0
var precioMoto4 = 0
var precioMoto5 = 0

function comprar() {
    var carritoDeCompras = document.querySelector("#carrito h2");
let resultado = precioAuto1 + precioAuto2 + precioAuto3 + precioAuto4 + precioAuto5 + precioMoto1 + precioMoto2 + precioMoto3 + precioMoto4 + precioMoto5;
  
    carritoDeCompras.textContent = "Carrito de compras: $" + resultado;


    if(resultado==0){
        alert("Aun no puedes hacer ningun pago. Agrega articulos para poder continuar.")
    }else if(resultado>=saldo){
        alert("No tienes saldo suficiente.")
    }else if(saldo>=resultado){
        alert("Tu compra ha sido procesada con éxito. ¡Gracias por comprar aquí!")
    }
}
    


function auto1() {



    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1486%29.jpg";
    img.style.width = "100px";
    img.style.height = "85px";
    item.style.marginRight = "10px";
    item.style.marginBottom = "10px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Lamborghini";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$350,000";
    price.style.color = "white"
    item.appendChild(price);
    precioAuto1 += 350000;

    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioAuto1 -= 350000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}









function auto2() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://www.chevroletautosss.com.mx/content/dam/chevrolet/na/mx/es/index/performance/performance-subcontent/01-images/2018-deportivos-01.jpg?imwidth=960";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Corvette Stingray";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$60,000";
    price.style.color = "white"
    item.appendChild(price);
    precioAuto2 += 60000;

    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioAuto2 -= 60000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}







function auto3() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://latam-editorial.pxcrush.net/soloautos/general/editorial/2022-bugatti-chiron-no-400-6.jpeg";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Bugatti Chiron";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$200,000";
    price.style.color = "white"
    item.appendChild(price);
    precioAuto2 += 200000;


    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioAuto2 -= 200000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };


    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}







function auto4() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://www.pruebaderuta.com/wp-content/uploads/2015/05/superautos-620x264.jpg";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Vencer Sarthe";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$350,000";
    price.style.color = "white"
    item.appendChild(price);
    precioAuto4 += 350000


    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioAuto4 -= 350000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}







function auto5() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://media.gq.com.mx/photos/6010865c19128da7b9d1b9dd/16:9/w_2560%2Cc_limit/Teslaportadaok.jpg";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Tesla";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$3,000,000";
    price.style.color = "white"
    item.appendChild(price);
    precioAuto5 += 3000000;


    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioAuto5 -= 3000000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}












function moto1() {



    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://lh3.googleusercontent.com/1-DJjcM6nmDK2vHc11M5yagVoJO1fs6RCEz4q83BvErJlaXcyA9OOrkxQIZX8yOi47D3sEmM-hD6ckKvxpT3q1_GfWixMrcXp7vdbarN";
    img.style.width = "100px";
    img.style.height = "85px";
    item.style.marginRight = "10px";
    item.style.marginBottom = "10px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Suzuki GSX125";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$4,000";
    price.style.color = "white"
    item.appendChild(price);
    precioMoto1 += 4000;

    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioMoto1 -= 4000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}









function moto2() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://www.daytonamotos.com/wp-content/uploads/2016/08/CB1-1.png";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Honda CB1";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$3,000";
    price.style.color = "white"
    item.appendChild(price);
    precioMoto2 += 3000;

    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioMoto2 -= 3000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}







function moto3() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://lh3.googleusercontent.com/pyY-CTlziFAW8cAYrRAjnu95R2IYaXDPatIEKHxpGhHH8kRNlUdYmW8xCQaKkIZD2mtocCMbyWNSmk1wwQSGQnXdK4BWuXmg2IzfI58";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Ducati 1199";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$20,000";
    price.style.color = "white"
    item.appendChild(price);
    precioMoto3 += 20000;


    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioMoto3 -= 20000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };


    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}







function moto4() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://lh3.googleusercontent.com/mq1SuFz2sZUaRirFsCLdq4eZXte6Ev3vjZW_a30K2F58PcpKFrs0Xf00TCZvb4Zu8w5rj73uy-LzWk4ZNmFKgG3wkc8m4AMSN0UXpnBf";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Kawasaki Ninja 300";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$6,000";
    price.style.color = "white"
    item.appendChild(price);
    precioMoto4 += 6000


    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioMoto4 -= 6000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}







function moto5() {
    // Crear un nuevo elemento div para el artículo
    var item = document.createElement("div");

    // Crear una imagen y agregarla al elemento div
    var img = document.createElement("img");
    img.src = "https://lh3.googleusercontent.com/rlL8e8tbyD1qSX5M4QIPbniRa2ywSdlCy7xe6-_we3zSxroUnhFl8V8YPs3XWI2uPBhJ_qTHt3omFXS1N45AY9xzjZ9J3rhd6F8hlMU";
    img.style.width = "150px";
    img.style.height = "85px";
    item.style.marginRight = "20px";
    item.style.marginBottom = "20px";
    item.appendChild(img);

    // Crear un elemento de texto para el nombre y agregarlo al elemento div
    var name = document.createElement("p");
    name.textContent = "Yamaha YZF-R1";
    item.appendChild(name);

    // Crear un elemento de texto para el precio y agregarlo al elemento div
    let price = document.createElement("p");
    price.textContent = "$18,000";
    price.style.color = "white"
    item.appendChild(price);
    precioMoto5 += 18000;


    // Crear un botón de eliminar y agregar los estilos CSS
    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.style.backgroundColor = "red";
    eliminar.style.color = "white";
    eliminar.style.fontSize = "16px";
    eliminar.style.padding = "8px 16px";
    eliminar.style.border = "none";
    eliminar.style.borderRadius = "4px";
    eliminar.style.cursor = "pointer";
    eliminar.style.marginTop = "10px";
    eliminar.style.marginBottom = "10px";
    eliminar.style.display = "block";
    eliminar.style.marginLeft = "0%"; /* MOVER EL BUTTON DE IZQUIERDA O DERECHA*/
    eliminar.style.marginRight = "auto";
    eliminar.style.width = "100px";
    eliminar.style.textAlign = "center";
    eliminar.style.fontWeight = "bold";
    eliminar.style.textTransform = "uppercase";
    eliminar.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.2)";
    eliminar.style.transition = "background-color 0.3s ease-in-out";
    eliminar.onmouseover = function () {
        eliminar.style.backgroundColor = "darkred";
    };
    eliminar.onmouseout = function () {
        eliminar.style.backgroundColor = "red";
    };

  // Función para eliminar el artículo y actualizar el botón de eliminar
  eliminar.onclick = function () {
    item.remove();
    // actualiza el precio al eliminar un artículo
    precioMoto5 -= 18000;
    if (document.querySelectorAll("#items div").length === 0) {
      document.getElementById("eliminar").style.display = "none";
    }
  };

    // Agregar el elemento div al contenedor de carrito de compras
    item.appendChild(eliminar);
    document.getElementById("items").appendChild(item);
    document.getElementById("eliminar").style.display = "block";
}
