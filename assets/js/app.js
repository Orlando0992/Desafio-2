let imagen = document.querySelector('img')
let pagina = window.location.pathname.split("/").pop();


//Codigo Ejercicio 1
if(pagina === "index.html") {
    let borde = false
    let principal = document.querySelector("img");

    principal.addEventListener("click", function (e) {
        if (borde === true) {
            borde = false;
            principal.style.border = 'none';
        } else {
            borde = true;
            principal.style.border = '2px solid red'
        }
    })
}

//Codigo Ejercicio 2

if (pagina === "problema2.html") {
    let btn_verificador = document.querySelector("#verificador");
    let alertaCantidad = document.querySelector("#alerta-cantidad");

    btn_verificador.addEventListener("click", () => {
        let num1 = Number(document.querySelector('#pelicula1').value);
        let num2 = Number(document.querySelector('#pelicula2').value);
        let num3 = Number(document.querySelector('#pelicula3').value);

        if ( isNaN (num1) || num1 < 0) {
            alertaCantidad.style.color = "red";
            alertaCantidad.innerHTML = `Error: Favor revisar cantidad`
            return
        }
        if ( isNaN (num2) || num2 < 0) {
            alertaCantidad.style.color = "red";
            alertaCantidad.innerHTML = `Error: Favor revisar cantidad`
            return
        }
        if ( isNaN (num3) || num3 < 0) {
            alertaCantidad.style.color = "red"
            alertaCantidad.innerHTML = `Error: Favor revisar cantidad`
            return
        }

        let suma = num1 + num2 + num3;

        if ( suma > 10) {
            alertaCantidad.style.color = "red"
            alertaCantidad.innerHTML = "Error: Maximo 10 ticket"
        } else {
            if (suma!=0) {
                alertaCantidad.style.color = "blue";
                alertaCantidad.innerHTML = `${suma} Tickets, gracias por tu compra`
            } else {
                alertaCantidad.style.color = "red";
                alertaCantidad.innerHTML = "Error: No se permiten ventas sin tick"
            }
        }
    });
    
}

//Codigo Ejercicio 3

if (pagina === "problema3.html") {
    let botonPassword = document.querySelector("#btn-password");
    let alertaPassword = document.querySelector ("#alerta-password");

    botonPassword.addEventListener("click", () => {
        let num1 = document.querySelector("#selector-1").value;
        let num2 = document.querySelector("#selector-2").value;
        let num3 = document.querySelector("#selector-3").value;

        let password = num1 + num2 + num3;

        if(password == "911" ) {
            alertaPassword.style.color= "blue";
            alertaPassword.innerHTML="password 1 correcto";
        } else if (password == "714") {
            alertaPassword.style.color= "blue";
            alertaPassword.innerHTML="password 2 correcto";
        } else {
            alertaPassword.style.color= "red";
            alertaPassword.innerHTML="password incorrecta";
        }
    })
}



