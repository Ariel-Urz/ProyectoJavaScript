
//LISTA DE STOCK

let stockProductos = [

    //LISTA DE STOCK DE COLECCION

    {id: 1, nombre: "Spider Man", tipo: "Coleccion", cantidad: 1, desc: "SpiderMan articulado", precio: 5000, marca: "Marvel", img: '../img/SpiderMan.png'},
    {id: 2, nombre: "Capitan America", tipo: "Coleccion", cantidad: 1, desc: "Capitan Amercia Articulado", precio: 4000, marca: "Marvel", img: '../img/CapitanAmerica.png'},
    {id: 3, nombre: "Hulk", tipo: "Coleccion", cantidad: 1, desc: "Hulk Articulado", precio: 5000, marca: "Marvel", img: '../img/Hulk.png'}, 
    {id: 4, nombre: "Thor", tipo: "Coleccion", cantidad: 1, desc: "Thor articulado", precio: 4000, marca: "Marvel", img: '../img/Thor.png'},
    {id: 5, nombre: "Ant-Man", tipo:"Coleccion", cantidad: 1, desc: "Ant-Man Articulado", precio: 3500, marca: "Marvel", img: '../img/AntMan.png'},
    {id: 6, nombre: "Black Panther", tipo: "Coleccion", cantidad: 1, desc: "Black Panther Articulado", precio: 3000, marca: "Marvel", img: '../img/BlackPanter.png'},
    {id: 7, nombre: "Ultron", tipo: "Coleccion", cantidad: 1, desc: "Ultron articulado", precio: 3000, marca: "Marvel", img: '../img/Ultron.png'},
    {id: 8, nombre: "HulkBuster", tipo: "Coleccion", cantidad: 1, desc: "HulkBuster Articulado", precio: 5000, marca: "Marvel", img: '../img/HulkBuster.png'},
    {id: 9, nombre: "Blanca Nieve", tipo: "Coleccion", cantidad: 1, desc: "Blanca Nieve articulado", precio: 4000, marca: "Disney", img: '../img/DisneyPrincesa1.png'},
    {id: 10, nombre: "Cenicienta", tipo: "Coleccion", cantidad: 1, desc: "Cenicienta Articulado", precio: 4000, marca: "Disney", img: '../img/DisneyPrincesa2.png'},
    {id: 11, nombre: "Ariel", tipo: "Coleccion", cantidad: 1, desc: "Ariel Articulado", precio: 4000, marca: "Disney", img: '../img/DisneyPrincesa3.png'}, 
    {id: 12, nombre: "Bella", tipo: "Coleccion", cantidad: 1, desc: "Bella articulado", precio: 4000, marca: "Disney", img: '../img/DisneyPrincesa4.png'},
    {id: 13, nombre: "Hotwheels", tipo: "Coleccion", cantidad: 1, desc: "Camioneta HotWheels N°116", precio: 2000, marca: "Mattel", img: '../img/Hotwheels1.png'},
    {id: 14, nombre: "Hotwheels", tipo: "Coleccion", cantidad: 1, desc: "Chevi Impala N°70", precio: 2000, marca: "Mattel", img: '../img/Hotwheels2.png'},
    {id: 15, nombre: "Hotwheels", tipo: "Coleccion", cantidad: 1, desc: "Chevrolet Impala SS N°232 ", precio: 2000, marca: "Mattel", img: '../img/Hotwheels3.png'},
    {id: 16, nombre: "Hotwheels", tipo: "Coleccion", cantidad: 1, desc: "Chevelle N°75", precio: 5000, marca: "Mattel", img: '../img/Hotwheels4.png'},


    //LISTA DE STOCK DE JUEGO DE MESA

    {id: 17, nombre: "Monopoly", tipo: "JuegoMesa", cantidad: 1, desc: "Monopoly Tradicional", precio: 2000, marca: "Hasbro", img: '../img/JuegodeMesa1.png'},
    {id: 18, nombre: "Uno", tipo: "JuegoMesa", cantidad: 1, desc: "Uno Tradicional", precio: 2000, marca: "Mattel", img: '../img/JuegodeMesa2.png'},
    {id: 19, nombre: "Jenga", tipo: "JuegoMesa", cantidad: 1, desc: "Jenga Tradicional ", precio: 2000, marca: "Hasbro", img: '../img/JuegodeMesa3.png'},
    {id: 20, nombre: "Ajedrez", tipo: "JuegoMesa", cantidad: 1, desc: "Ajedrez Clasico", precio: 2000, marca: "Ruibal", img: '../img/JuegodeMesa4.png'},


    //LISTA DE STOCK DE PELUCHES

    {id: 21, nombre: "Peluche Oso", tipo: "Peluches", cantidad: 1, desc: "Peluche Oso 52 cm", precio: 2500, marca: "Hasbro", img: '../img/Peluche1.png'},
    {id: 22, nombre: "Peluche Pokemon", tipo: "Peluches", cantidad: 1, desc: "Peluche de Pokemon 30 cm", precio: 3000, marca: "Hasbro", img: '../img/Peluche2.png'},
    {id: 23, nombre: "Peluche Among us", tipo: "Peluches", cantidad: 1, desc: "Peluche among us 30 cm", precio: 2000, marca: "Hasbro", img: '../img/Peluche3.png'},
    {id: 24, nombre: "Peluche Stich", tipo: "Peluches", cantidad: 1, desc: "Peluche Stich 50 cm", precio: 3000, marca: "Disney", img: '../img/Peluche4.png'},

    //LISTA DE STOCK DE BEBES

    {id: 25, nombre: "Gimnasio", tipo: "Bebe", cantidad: 1, desc: "Gimnasio de bebe", precio: 3500, marca: "Hasbro", img: '../img/bebe1.png'},
    {id: 26, nombre: "Mordillo", tipo: "Bebe", cantidad: 1, desc: "Mordillo para bebe diferentes variedad", precio: 3000, marca: "Hasbro", img: '../img/bebe2.png'},
    {id: 27, nombre: "Pelota", tipo: "Bebe", cantidad: 1, desc: "Pelota sensorial y con sonidos para bebes", precio: 2000, marca: "Hasbro", img: '../img/bebe3.png'},
    {id: 28, nombre: "Apilable", tipo: "Bebe", cantidad: 1, desc: "Juguete apilable para bebe", precio: 2000, marca: "Disney", img: '../img/bebe4.png'},

    //LISTA DE STOCK DE BEBES VEHICULOS

    {id: 29, nombre: "Auto", tipo: "Vehiculos", cantidad: 1, desc: "Auto Radio Control", precio: 4500, marca: "Mattel", img: '../img/Vehiculos2.png'},
    {id: 30, nombre: "Pack de Vehiculos", tipo: "Vehiculos", cantidad: 1, desc: "Vehiculos Variados", precio: 3000, marca: "Hasbro", img: '../img/Vehiculos.png'},
    {id: 31, nombre: "Tractor", tipo: "Vehiculos", cantidad: 1, desc: "Tractor Radio Control", precio: 4500, marca: "Mattel", img: '../img/Tractor.png'},
    {id: 32, nombre: "Cars", tipo: "Vehiculos", cantidad: 1, desc: "Pack de Cars", precio: 3000, marca: "Disney", img: '../img/Vehiculos3.png'},

]