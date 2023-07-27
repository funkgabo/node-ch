import Producto from "./classes/Producto.js";
import ProductManager from "./classes/ProductManager.js";

const producto1 = new Producto('Jamón', 3000, 'carnes', 'naranja')
const producto2 = new Producto('pan', 500, 'panadería', 'café')
const producto3 = new Producto('tomate', 1200, 'verduras', 'rojo')
const producto4 = new Producto('manzana', 800, 'fruta', 'roja')
const manager1 = new ProductManager()

manager1.addProduct(producto1)
manager1.addProduct(producto2)
manager1.addProduct(producto3)
manager1.addProduct(producto4)
console.log(manager1.getProductos())
//console.log(manager1.getProductById(1))