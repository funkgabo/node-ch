export default class ProductManager {

    constructor() {
        this.products = []
    }
    //MÉTODOS#########

    //Agregar Producto
    addProduct(product) {
        this.products.push(product)
    }
    //Obtener todos los Productos
    getProductos() {
        return this.products
    }

    //Obtener productos por ID
    getProductById(id) {
        const product = this.products
            .find(product => product.id === id)
        return product ? product : 'Product Not found'
    }
}