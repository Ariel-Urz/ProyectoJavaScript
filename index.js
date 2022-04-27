
/*Registro*/

alert("Bienvenido");
alert("Para comprar necesita estar registrado");

let usuario = prompt("Ingrese Usario");
let contraseña = prompt("Ingrese contraseña");
let confirContraseña = prompt("Repetir contraseña");

/*Si la contraseñas no coinciden vuelve a repetir*/

while (contraseña != confirContraseña){

    alert("su contraseña esta mal");
    contraseña = prompt("Ingrese contraseña ");
    confirContraseña = prompt("Repetir contraseña ");

    if (contraseña == confirContraseña){
       alert("las contraseñas coiciden")
    }

}
alert("Registro Completo");


/*Funcion de Comprar Articulo*/

function compraUno(){

    let juguete = prompt("Elija entre 3 produnctos con stock: \n" +

                        "1) Juguete de Accion \n" +
                        "2) Juguete de Mesa \n" +
                        "3) Juguete de Bebe")
  
    switch (juguete) {

        /*Opcion 1 Juguete de Accion*/
        case "1":

            alert("Seleccionaste Juguete de accion \n"+
                  "El precio es 50$ por unidad");   
            precio = 50;
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));
            resultado = precio * cantidad;
            alert("cantidad de juguetes seleccionado "+ cantidad + "\nEl monto total a pagar es " + resultado + "$");
            break;

        /*Opcion 2 Juguete de Mesa*/

        case "2":

            alert("Seleccionaste Juguete de Mesa \n"+
                  "El precio es 100$ por unidad");   
            precio = 100;
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));
            resultado = precio * cantidad;
            alert("cantidad de juguetes seleccionado "+ cantidad + "\nEl monto total a pagar es " + resultado + "$");
            break;

        /*Opcion 3 Juguete de Bebe*/

        case "3":

            alert("Seleccionaste Juguete de Bebe \n"+
                  "El precio es 25$ por unidad");   
            precio = 25;
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));
            resultado = precio * cantidad;
            alert("cantidad de juguetes seleccionado "+ cantidad + "\nEl monto total a pagar es " + resultado + "$");
            break;

        default:
            alert("El valor seleccionado no tiene stock");
            break;

    }
  
}

/*Opcion de Repetir Compra*/

compraUno()

seguir = prompt("Si desea continuar comprando escriba (si): ")

while (seguir == "si"){

        compraUno();

        seguir = prompt("Desea Continuar Comprando");
}

alert("Compra finalizada")
        













    
