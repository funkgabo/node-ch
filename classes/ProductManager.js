export default class ProductManager {
    
    constructor(){
        this.products = []
    }
    //MÉTODOS#########

    //Agregar Producto
    addProduct (product) {
        const id = this.idProduct()
        product.id = id
        this.products.push(product)
    }
    //Obtener todos los Productos
    getProductos() {
        return this.products
    }

    //Obtener productos por ID
    getProductById(id) {
        const product = this.products
        .filter(product => product.id === id)
        return product
    }

    //ID autogenerado
    idProduct () {
        if(this.products.length < 1) return 1
        const ids = this.products.map(product => product.id)
        const id = Math.max(...ids) + 1
        return id
    }
}