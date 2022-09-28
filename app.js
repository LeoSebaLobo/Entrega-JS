let enviarCarro = document.querySelector(".botonCarrito")
console.log(enviarCarro)


enviarCarro.addEventListener("click", avisar)


function avisar() {
    alert("Su producto fue enviado al carrito de compras")
}




class Producto {
    constructor(id, nombre, precio, categoria, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}   
const productosDisponibles = []
productosDisponibles.push(new Producto(1, "Funda1", 2299, "Funda", "imagenes/Productos/fundas/funda1.PNG"));
productosDisponibles.push(new Producto(2, "Funda2", 3899, "Funda","imagenes/Productos/fundas/funda2.PNG"));
productosDisponibles.push(new Producto(3, "Funda3", 3499, "Funda", "imagenes/Productos/fundas/funda3.PNG"));
productosDisponibles.push(new Producto (5, "Funda5", 5299, "Funda", "imagenes/Productos/fundas/funda4.PNG"));
productosDisponibles.push(new Producto (4, "Funda4", 3799, "Funda", "imagenes/Productos/fundas/funda5.PNG"));
productosDisponibles.push(new Producto (6, "Funda6", 999, "Funda", "imagenes/Productos/fundas/funda6.PNG"));
productosDisponibles.push(new Producto (7, "Funda7", 1499, "Funda", "imagenes/Productos/fundas/funda7.PNG"));
productosDisponibles.push(new Producto (8, "Funda8", 1999, "Funda", "imagenes/Productos/fundas/funda8.PNG"));
productosDisponibles.push(new Producto (9, "Accesorio1", 1199, "Accesorio", "imagenes/Productos/Accesorios/accesorio1.PNG"));
productosDisponibles.push(new Producto (10, "Accesorio2", 999, "Accesorio", "imagenes/Productos/Accesorios/accesorio2.PNG"));
productosDisponibles.push(new Producto (11, "Accesorio3", 1999, "Accesorio", "imagenes/Productos/Accesorios/accesorio3.PNG"));
productosDisponibles.push(new Producto (12, "Accesorio4", 499, "Accesorio", "imagenes/Productos/Accesorios/accesorio4.PNG"));
productosDisponibles.push(new Producto (13, "Accesorio5", 499, "Accesorio", "imagenes/Productos/Accesorios/accesorio5.PNG"));
productosDisponibles.push(new Producto (14, "Accesorio6", 2199, "Accesorio", "imagenes/Productos/Accesorios/accesorio6.PNG"));
productosDisponibles.push(new Producto (15, "Accesorio7", 17499, "Accesorio", "imagenes/Productos/Accesorios/accesorio7.PNG"));
productosDisponibles.push(new Producto (16, "Accesorio8", 4499, "Accesorio", "imagenes/Productos/Accesorios/accesorio8.PNG"));
productosDisponibles.push(new Producto (17, "Auricular1", 6199, "Auricular", "imagenes/Productos/Auriculares/auricular1.PNG"));
productosDisponibles.push(new Producto (18, "Auricular2", 22499, "Auricular", "imagenes/Productos/Auriculares/auricular2.PNG"));
productosDisponibles.push(new Producto (19, "Auricular3", 2199, "Auricular", "imagenes/Productos/Auriculares/auricular3.PNG"));
productosDisponibles.push(new Producto (20, "Auricular4", 23799, "Auricular", "imagenes/Productos/Auriculares/auricular4.PNG"));
productosDisponibles.push(new Producto (21, "Auricular5", 1899, "Auricular", "imagenes/Productos/Auriculares/auricular5.PNG"));
productosDisponibles.push(new Producto (22, "Auricular6", 1899, "Auricular", "imagenes/Productos/Auriculares/auricular6.PNG"));
productosDisponibles.push(new Producto (23, "Auricular7", 7899, "Auricular", "imagenes/Productos/Auriculares/auricular7.PNG"));
productosDisponibles.push(new Producto (24, "Auricular8", 5199, "Auricular", "imagenes/Productos/Auriculares/auricular8.PNG"));
productosDisponibles.push(new Producto (25, "Parlante1", 3199, "Parlante", "imagenes/Productos/Parlantes/parlante1.PNG"));
productosDisponibles.push(new Producto (26, "Parlante2", 29999, "Parlante", "imagenes/Productos/Parlantes/parlante2.PNG"));
productosDisponibles.push(new Producto (27, "Parlante3", 13199, "Parlante", "imagenes/Productos/Parlantes/parlante3.PNG"));
productosDisponibles.push(new Producto (28, "Parlante4", 8199, "Parlante", "imagenes/Productos/Parlantes/parlante4.PNG"));
productosDisponibles.push(new Producto (29, "Parlante5", 14999, "Parlante", "imagenes/Productos/Parlantes/parlante5.PNG"));
productosDisponibles.push(new Producto (30, "Parlante6", 5699, "Parlante", "imagenes/Productos/Parlantes/parlante6.PNG"));
productosDisponibles.push(new Producto (31, "Parlante7", 2699, "Parlante", "imagenes/Productos/Parlantes/parlante7.PNG"));
productosDisponibles.push(new Producto (32, "Parlante8", 5499, "Parlante", "imagenes/Productos/Parlantes/parlante8.PNG"));



let filtroPrecio1 = productosDisponibles.filter((producto) => producto.precio > 2500);
let filtroPrecio2 = productosDisponibles.filter((producto) => producto.precio > 5000);
let filtroPrecio3 = productosDisponibles.filter((producto) => producto.precio < 5000);
let filtroCategoria1 = productosDisponibles.filter((producto) => producto.categoria = "Funda");
let filtroCategoria2 = productosDisponibles.filter((producto) => producto.categoria = "Accesorio");
let filtroCategoria3 = productosDisponibles.filter((producto) => producto.categoria = "Auricular");
let filtroCategoria4 = productosDisponibles.filter((producto) => producto.categoria = "Parlante");


let lista = document.querySelector("section.listaProductos")
let temp = document.querySelector("template")
let card = temp.content.querySelector(".card")

productosDisponibles.forEach((elm)=> {
    let cardClonada = card.cloneNode(true)

    lista.appenChild(cardClonada)
})
