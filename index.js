
function registro(){


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
    
    alert("Registro Completo \n" + "Usuario: "+ usuario + "\n" + "contraseña: " + contraseña);
    
    
    }
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
    
    class Sugerencia{
    
        constructor (marca,nombre){
    
                this.marca = marca;
                this.nombre = nombre;
        }
    
        mostrar(){
                alert("Marca Sugerida " + this.marca + "\n" + "Juguete Sugerido " + this.nombre);
        }
    
    }
    
    
    // Ejecucion del codigo
    
    //Inicio del Registro
    registro();
    
    //Inicio de Compra
    
    compraUno()
    
    seguir = prompt("Si desea continuar comprando escriba (si): ");
    
    while (seguir == "si"){
    
            compraUno();
    
            seguir = prompt("Desea Continuar Comprando");
    }
    
    alert("Compra finalizada");
    
    //Sugerencia para el catalogo
    
    const catalogo = ["IronMan","SpiderMan","Hulk","Thor","Peluche","Autos","Princesa Disney","Bebes"];
    
    alert("Catalogo para el proximo mes\n" + catalogo.join("\n"));
    
    alert("Por favor sugiera Productos para agregar a nuestro catalogo");
    
    opcion = "si"
    
    while (opcion == "si"){
    
        let marcaNueva = prompt("Sugiera alguna marca de Juguete: ");
        let jugueteNuevo = prompt("Suguiera algun Juguete: ");
        const producto = new Sugerencia(marcaNueva, jugueteNuevo);
        producto.mostrar();
        catalogo.push(producto.nombre);
        alert("Sus suguerencias seran evaluadas para agragar al siguiente catalogo " + catalogo.join("\n"));
        opcion = prompt("Si Desea Sugerir otro prducoto escriba (si): ");
        }
        alert(catalogo.join("\n"))
    
    let nuevoCatalogo=catalogo
    
    //Sugerencia para borrar producto del catalogo
    
    aceptar = prompt("deseas sugerir eliminar algo del catalogo escribe (si): ");
    
    while (aceptar == "si"){
    
        elejido = prompt("este es nuestro catalogo, que desea elminar?\n" + nuevoCatalogo.join("\n"));
    
        let index = nuevoCatalogo.indexOf(elejido);
    
        //Elimina el producto si esta en el catalogo
    
        if (index != -1){
    
            nuevoCatalogo.splice(index , 1);
    
            alert(nuevoCatalogo.join("\n"));
    
            aceptar = prompt("desea eliminar algo mas? escriba (si): ");
        }
    
        //Si no esta el producto en nuestro catalogo
    
        else{
            alert("el nombre sugerido no esta en nuestro catalgo");
    
            aceptar = prompt("deseas volver a intentar escriba(si): ");
        }  
    }
    
    alert("Gracias por las sugerencias")
    
    //busqueda en el catalogo
    aceptBusqueda = prompt("deseas encontrar algun producto en nuestro catalogo? escriba(si)");
    
    while ( aceptBusqueda == "si"){
    
        let busquedaJuguete = prompt("Que producto desea encontrar?: ");
    
        const busqueda = nuevoCatalogo.filter(elem => elem === busquedaJuguete);
    
        //Si encuentra muestra el producto
    
        if (busqueda == busquedaJuguete){
    
            alert("Pruducto encontrado en nuestro Catalogo " + busqueda);
            aceptBusqueda = prompt("desea buscar otro producto?"); 
        }
    
        //Sino encuentra el producto
        
        else{
            alert("Producto no encontrado");
            aceptBusqueda = prompt("desea buscar otro producto?");
        }
    }
    
    alert("Gracias Por Visitarnos Fin")
    












    
