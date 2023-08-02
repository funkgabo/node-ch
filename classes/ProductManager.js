import fs from "node:fs"
import readline from 'readline'
const data = fs.readFileSync('./data/products.json')
const products = JSON.parse(data)

export default class ProductManager {

    constructor() {
        this.products = products
    }
    //MÉTODOS//

    //1.- Agregar Producto
    addProduct(product) {
        if (!product.id || !product.nombre || !product.precio ||
            !product.categoria || !product.description || !product.color
            || !product.thumbnail || !product.code || !product.stock){
                console.log('Todos los campos son requeridos')
                return
            }
            this.products.push(product)
        const jsonProduct = JSON.stringify(this.products)
        fs.writeFileSync('./data/products.json', jsonProduct, 'utf-8')
        return 'New Product Added'
    }
    //2.- Obtener todos los Productos
    getProductos() {
        return this.products
    }

    //3.- Obtener productos por ID
    getProductById(id) {
        const product = this.products
            .find(product => product.id === id)
        return product ? product : 'Product Not found'
    }

    //4.- Borrar un producto por ID
    deleteProductById(id) {
        const productById = this.getProductById(id)
        if (productById === 'Product Not found') {
            return `Product ID ${id} Not Found`
        } else {
            const filteredProducts = this.products.filter(product => product.id !== id)
            const jsonFilteredProducts = JSON.stringify(filteredProducts)
            fs.writeFileSync('./data/products.json', jsonFilteredProducts, 'utf-8')

            return `Product ID ${id} was deleted`
        }
    }
    //5.- Borrar todos los productos
    deleteAllProducts() {
        this.products = []
        const jsonDeletedProducts = JSON.stringify(this.products)
        fs.writeFileSync('./data/products.json', jsonDeletedProducts, 'utf-8')
        return 'All Products Deleted'
    }
    //6.- Actualizar un Producto
    UpdateProductById(id) {
        this.getUserPrompt()
            .then(result => {
                const productById = this.getProductById(id)
                const jsonProduct = JSON.stringify(productById)
                const parseProduct = JSON.parse(jsonProduct)
                parseProduct.nombre = result
                const filteredProducts = this.products.filter(product => product.id !== id)
                const concatUpdate = [...filteredProducts, parseProduct]
                const concatUpdateString = JSON.stringify(concatUpdate)
                fs.writeFileSync('./data/products.json', concatUpdateString, 'utf-8')
            }).finally(() => console.log('Product Name Updated'))
    }
    //Lectura de inputs de usuario
    getUserPrompt() {
        return new Promise(resolve => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question("Set a new Name to the Product", (answer) => {
                resolve(answer);
                rl.close();
            });
        });
    }

}