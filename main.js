import Producto from "./classes/Producto.js";
import ProductManager from "./classes/ProductManager.js";



//////EJECUTAR CREACIÓN DE PRODUCTOS//////

const producto1 = new Producto('Jamón', 3000, 'carnes', 'un estracto del cerdo', 'naranja', [], 'EEFFOL', 5)
const producto2 = new Producto('pan', 500, 'panadería', 'Un bien del pueblo', 'café', [], 'FFLLVF', 16)
const producto3 = new Producto('tomate', 1200, 'verduras', 'La verdura de Italia', 'rojo', [], 'GGBBLO', 11)
const producto4 = new Producto('manzana', 800, 'fruta','fruto del Eden', 'roja', [], 'YYNVBT', 22)
const manager1 = new ProductManager()


//1.- ////AGREGAR PRODUCTOS////////
//  IMPORTANTE: EJECUTAR SÓLO 1 Y COMENTAR, PARA NO DUPLICAR LOS DATOS EN EL ARCHIVO JSON, O EJECUTAR "5.- ELIMINAR TODOS LOS PRODUCTOS" PARA LIMPIAR LOS DATOS //

manager1.addProduct(producto1)
manager1.addProduct(producto2)
manager1.addProduct(producto3)
manager1.addProduct(producto4)

/* ---------------------------------------------------------------------------------------------------- */

//EJECUTAR CADA MÉTODO POR SEPARADO DESCOMENTÁNDOLO SEGÚN SE SOLICITE REVISAR//

//2.- Obtener Todos los Productos
//console.log(manager1.getProductos())  // Retrorna todos los productos creados

//3.- Obtener 1 producto por su ID
//console.log(manager1.getProductById(2)) // Retorna el Producto con ID 2
//console.log(manager1.getProductById(7)) // Producto No encontrado

//4.- Eliminar producto por ID
//console.log(manager1.deleteProductById(4)) // El Producto con ID x ha sido Eliminado

//5.- Elimina Todos los productos
//console.log(manager1.deleteAllProducts()) //Todos los productos Eliminados

//6.- Actualizar NOMBRE de producto según el ID
//console.log(manager1.UpdateProductById(3)) // Elija un nuevo nombre para el producto: // Nombre de producto actualzado
