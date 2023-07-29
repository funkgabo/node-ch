import Producto from "./classes/Producto.js";
import ProductManager from "./classes/ProductManager.js";

const producto1 = new Producto('Jamón', 3000, 'carnes', 'un estracto del cerdo', 'naranja', [], 'EEFFOL', 5)
const producto2 = new Producto('pan', 500, 'panadería', 'Un bien del pueblo', 'café', [], 'FFLLVF', 16)
const producto3 = new Producto('tomate', 1200, 'verduras', 'La verdura de Italia', 'rojo', [], 'GGBBLO', 11)
const producto4 = new Producto('manzana', 800, 'fruta','fruto del Eden', 'roja', [], 'YYNVBT', 22)
const manager1 = new ProductManager()

manager1.addProduct(producto1)
manager1.addProduct(producto2)
manager1.addProduct(producto3)
manager1.addProduct(producto4)
//console.log(manager1.getProductos())  // Retrorna todos los productos creados
console.log(manager1.getProductById(2)) // Retorna el Producto con ID 2
console.log(manager1.getProductById(7)) // Producto No encontrado
