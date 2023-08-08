# Curso de Programación Backend CoderHouse Primer Desafío


Para levantar el servidor, ejecutar el siguiente comando:

```sh
npm run dev
```

Para listar todos los productos, insertar la siguiente URL en el navegador (una vez levantado el servidor):

```sh
http://localhost:4000
```

Para listar los productos existentes con un **Límite** en particular, insertar la siguiente URL en el navegador (una vez levantado el servidor):

```sh
http://localhost:4000?limit={valor}
```
El valor debe ser numérico

### Run Command : 
Ejecutar el siguiente comando: 

```sh
node ./src/main.js
```
Este comando se instancian las clases necesarias para construir valores que ejemplifican el funcionamiento del desafío solicitado.
### Challenge Structure :

La fichero **classes** cuenta con las siguientes clases  **ProductManager** y **Producto**. Estos, a su vez contienen internamente los siguientes métodos respectivamente:

**ProductManager.js:**
```
- addProduct
- getProducts
- getProductByid
- deleteProductById
- deleteAllProducts
- UpdateProductById
```
**Producto.js:**
```
- Producto
```
La clase **Product** tiene como estructura el los siguientes datos en su constructor:

```
- nombre
- precio
- categoria
- color
- thumbnail
- code
- stock
```




