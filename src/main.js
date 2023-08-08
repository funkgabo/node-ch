import Producto from "../classes/Producto.js";
import ProductManager from "../classes/ProductManager.js";



//MÉTODOS DE CREACIÓN DE PRODUCTOS//

//////DESCOMENTAR Y EJECUTAR EL COMANDO "node main.js" EN CADA BLOQUE DEBIDO A QUE EL ASYNC NO PERMITE CREAR TODOS LOS PRODUCTOS EN UNA SOLA EJECUCIÓN//////

//1.-  CREACIÓN DE PRODUCTOS //
//BLOQUE 1// 
// const producto1 = new Producto('Jamón', 3000, 'carnes', 'un estracto del cerdo', 'naranja', [], 'CAR266', 5)
// const manager1 = new ProductManager()
// manager1.addProduct(producto1)

//BLOQUE 2//
// const producto2 = new Producto('pan', 500, 'panaderia', 'Un bien del pueblo', 'café', [], 'PAN399', 16)
// const manager1 = new ProductManager()
// manager1.addProduct(producto2)

//BLOQUE 3//
// const producto3 = new Producto('tomate', 1200, 'verduras', 'La verdura de Italia', 'rojo', [], 'VER559', 11)
// const manager1 = new ProductManager()
// manager1.addProduct(producto3)

//BLOQUE 4//
// const producto4 = new Producto('manzana', 800, 'fruta','fruto del Eden', 'roja', [], 'FRU866', 22)
// const manager1 = new ProductManager()
// manager1.addProduct(producto4)

//BLOQUE 5//
// const producto5 = new Producto('Pera', 650, 'fruta','Mientras más jugosa mejor', 'verde', [], 'FRU875', 12)
// const manager1 = new ProductManager()
// manager1.addProduct(producto5)


/* ---------------------------------------------------------------------------------------------------- */

//SE SUGIERE COMENTAR TODOS LOS "MÉTODOS DE CREACIÓN DE PRODUCTOS" ANTES DE EJECUTAR LOS SIGUIENTES MÉTODOS//


//EJECUTAR CADA PUNTO POR SEPARADO DESCOMENTÁNDOLO SEGÚN SE SOLICITE REVISAR//

//2.- Obtener Todos los Productos
// const manager1 = new ProductManager() //Crea la instancia para la ejecución del método
// manager1.getProductos()  // Retrorna todos los productos creados

//3.- Obtener 1 producto por su ID
// const manager1 = new ProductManager() //Crea la instancia para la ejecución del método
// manager1.getProductById(2) // Retorna el Producto con ID 2
// manager1.getProductById(7) // Producto No encontrado

//4.- Eliminar producto por ID
// const manager1 = new ProductManager() //Crea la instancia para la ejecución del método
// manager1.deleteProductById(1) // El Producto con ID x ha sido Eliminado

//5.- Elimina Todos los productos
// const manager1 = new ProductManager() //Crea la instancia para la ejecución del método
// manager1.deleteAllProducts() //Todos los productos Eliminados

//6.- Actualizar NOMBRE de producto según el ID
// const manager1 = new ProductManager() //Crea la instancia para la ejecución del método
//El siguiente producto es de ejemplo
// const producto4 = new Producto('manzana', 800, 'fruta','fruto del Eden', 'roja', [], 'YYNVBT', 22)
// manager1.UpdateProductById(2, producto4) // Elija un nuevo nombre para el producto: // Nombre de producto actualzado