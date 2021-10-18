//creamos el constructor de bebida
function Bebidas(tipo, marca, capacidad, precio) {
    this.tipo = tipo;
    this.marca = marca;
    this.capacidad = capacidad;
    this.precio = precio;
}

//creamos el constructor de comida

function Alimento(tipo, nombre, precio) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
}
//declaramos variables/objetos
var cocacola500 = new Bebidas("gaseosa", "coca-cola", 500, 100);
var cocacola1000 = new Bebidas("gaseosa", "coca-cola", 1000, 200);
var cervezaQuilmes = new Bebidas("cerveza", "quilmes", 100, 150);
var cervezaBrhama = new Bebidas("cerveza", "brhama", 1000, 175)
var aguaMineralRikita = new Bebidas("agua mineral", "rikita", 500, 83);

var empanadas = new Alimento("comida", "empanadas", 50);
var pizza = new Alimento("comida", "pizza", 350);
var faina = new Alimento("comida", "faina", 103);
var helado = new Alimento("postre", "helado", 600);

//armamos un array
//var alimentoLista = [cocacola500,cocacola1000,cervezaQuilmes,cervezaBrhama,aguaMineralRikita];
//var bebidasLista = [empanadas,pizza,faina,helado];
var listaProductos = [cocacola500, cocacola1000, cervezaQuilmes, cervezaBrhama, aguaMineralRikita,
    empanadas, pizza, faina, helado];

//recorre array y devuelve objeto
//for( let i=0; i < alimentoLista.length; i++){
//  console.log(alimentoLista[i]);
//}
//recore arrray y devuelve arrays
//alimentoLista.map((alimento) => {
//        console.log(alimentoLista);
//  }  ) 



//alfabeticamente  por precio
listaProductos.sort((obj1, obj2) =>{
    if(obj1.precio > obj2.precio){
        return 1;
    }else if (obj1.precio < obj2.precio ){
        return -1;
    }else{
        return 0;
    }
    
    });
    console.log("alfabeticamente por precio");
    console.log(listaProductos);

//filtramos productos con precio menor o igual a 100
const productos = listaProductos.filter(x => x.precio <= 100);
console.log("Productos de menos o igual $100");
console.log(productos);

