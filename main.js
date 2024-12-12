//Arrays de productos
const productos = [
    {
        nombre:"ramdd4",
        precio:1000,
        stock:2
    },
    {
        nombre:"ryzen5",
        precio:1600,
        stock:3
    },
    {
        nombre:"intel9",
         precio:2000,
         stock:1
    },
    {
    nombre:"ramdd5",
    precio:1300,
    stock:2
    }
]
//Definicion de variables
let total=0
let subTotal=0;
let cantidadProductos=0;
let productosCompr=[];
let salir=0;

//definición de funciones 
const iva = (valor) => valor*0.21;

const inicio = () =>{

    if (confirm("¿Desea filtrar los articulos por precio?")){   
        return buscarPrecio();
    }
    else{
        productos.forEach(productos => console.log(`Nombre: ${productos.nombre} precio: ${productos.precio}$`))
        return comprar();
    }
}
const buscarPrecio= () =>{
    let precioMax=Number(prompt( "Ingrese su tope de precio"));
    let productosEncontrados= productos.filter((element) => element.precio <= precioMax && element.stock>0);
    let largoArray=productosEncontrados.length;
    console.log(largoArray);
    
    if(largoArray < 1){
        alert(`No hemos encontrado ningun producto debajo de los ${precioMax}$ `)
        let confirmacion=prompt("Escriba salir si no desea comprar nada, escriba filtrar para volver a filtrar o escriba mostrar para mostrar la lista de productos desordenada")
        switch(confirmacion){
            case "salir":
                alert("Esperamos verlo pronto")
                salir=1
                break ;
            case "filtrar":
                return buscarPrecio();
            default:
                productos.forEach(productos => console.log(`Nombre: ${productos.nombre} precio: ${productos.precio}$`))
                return comprar();
        }
    }
    else{
        productosEncontrados.forEach(element => console.log(`Hemos encontrado estos productos: ${element.nombre} Precio: ${element.precio} `));
        if (confirm("¿Desea comprar alguno de estos productos?")){

            return comprar();
        }
        else{
            return inicio();
        };
    }
}

const comprar = () =>{
    let productoAComprar=prompt("¿Que producto desea comprar?:").toLowerCase();
    let indice= productos.findIndex((element) => element.nombre === productoAComprar);
    console.log(indice);
    if (indice !=-1){
        productos[indice].stock-=1
        alert(`Producto agregado al carrito :Nombre: ${productos[indice].nombre} Precio:${productos[indice].precio}$`);
        subTotal+=productos[indice].precio
        cantidadProductos+=1
        productosCompr.push(productos[indice].nombre)
        console.log(`Productos:${productosCompr} Total:${subTotal} cantidad de productos adquiridos :${cantidadProductos}`)
        if(confirm("Desea continuar comprando?")){
            return inicio();
        }
        else{

            console.log(iva(subTotal))

             total=subTotal + iva(subTotal)
            alert(`El total a pagar son ${total}\n Productos adquiridos:${productosCompr}`)
            return alert("Muchas gracias por su compra esperamos verlo pronto.")
        }

    }
    else{
        alert("Disculpe no tenemos ese producto en stock")
        return comprar();
    }

}
alert("Bienvenido a PComponentes\n Abra la consola porque recibirá información allí también")
inicio();