//Inicialización de variables
let descuento=0;
let compra=0;
let total=0;

//definición de funciones
const suma= (a,b)=> a + b;
const resta= (a,b)=>a - b;
const calcIva= a=>a * 0.21;
function preguntar(){
    let respuesta=prompt("¿Que desea comprar? placa base 1000$, RAM 200$, CPU 990$ o para salir escriba salir ").toLowerCase();
    console.log(respuesta);
    switch(respuesta){
       case "ram":
        compra= 200;
        total=suma(compra,total);
        console.log(`Por el momento el total a pagar es ${total}`)
        verificarCont()
        break;
       case "cpu":
        compra= 990;
        total=suma(compra,total);
        console.log(`Por el momento el total a pagar es ${total}`)
        verificarCont()
        break
       case "placa base":
        compra= 1000;
        total=suma(compra,total);
        console.log(`Por el momento el total a pagar es ${total}`)
        verificarCont()
        break;
       case "salir":
        descuento=calcIva(total)+(total*0.1)
        total=total-descuento;
        console.log(`Por el momento el total a pagar es ${total}`)
        return alert("Esperamos verlo pronto");
        break ;
       default:
        alert("No se le comprendió.");
        return preguntar();
     }
}
function verificarCont(){
    let respuesta=prompt("¿Desea continuar? si, no o pagar:").toLowerCase();
    switch(respuesta){
        case "si":
            return preguntar();
            break;
        case "no":
            alert("Esperamos verlo pronto");
            break;
        case "pagar":
            descuento=calcIva(total)+(total*0.1);
            total=total-descuento;
            alert("El total a pagar es de "+total+"$");
            return alert("Gracias por su compra.");
            break;
        default:
            console.log("No se le entendio");
            return verificarCont();
        }
}



//Ejecución
alert("Bienvenido a PC componentes estamos en 10% de descuento.");
alert("Para poner en el carrito el producto que desea comprar escriba el nombre del mismo.");
alert("Se le va a descontar el 21% de IVA por la ley 19640");
preguntar();
