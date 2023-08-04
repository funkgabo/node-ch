import { promises as fs } from "node:fs"
const path = './data/products.json'

export default class ProductManager {

    constructor() { }
    //MÉTODOS//

    //1.- Agregar Producto
    async addProduct(product) {
        if (!product.nombre || !product.precio ||
            !product.categoria || !product.description || !product.color ||
            !product.thumbnail || !product.code || !product.stock) {
            console.log('All fields are Required')
            return
        }
        const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
        const producto = prods.find(prod => prod.id === product.id)

        if (producto) {
            console.log("Existing Product")
        } else {
            const jsonProduct = JSON.stringify(product)
            const parseProuct = JSON.parse(jsonProduct)
            parseProuct.id = await this.idProduct()
            prods.push(parseProuct)
            await fs.writeFile(path, JSON.stringify(prods))
        }
        return console.log('Product Added')
    }
    //2.- Obtener todos los Productos
    async getProductos() {
        const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
        return console.log(prods)
    }

    //3.- Obtener productos por ID
    async getProductById(id) {
        const product = JSON.parse(await fs.readFile(path, 'utf-8'))
        const searchedProduct = product.filter(product => product.id === id)
        return searchedProduct.length > 0
            ? console.log(searchedProduct)
            : console.log(`Product ID ${id} Not Found`)
    }

    //4.- Borrar un producto por ID
    async deleteProductById(id) {
        const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
        const product = prods.find(prod => prod.id === id)
        if (!product) return console.log(`Product ID ${id} Not Found`)

        await fs.writeFile(path, JSON.stringify(prods.filter(prod => prod.id !== id)))
        return console.log(`Product ID ${id} Was Deleted`)
    }
    //5.- Borrar todos los productos
    async deleteAllProducts() {
        const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
        await fs.writeFile(path, '[]')
        return console.log('All Products Deleted')
    }
    //6.- Actualizar un Producto
    async UpdateProductById(id, product) {
        if (!product.nombre || !product.precio ||
            !product.categoria || !product.description || !product.color ||
            !product.thumbnail || !product.code || !product.stock) {
            return console.log('All Product Fields are Required')
        }

        const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
        const prod = prods.find(prod => prod.id === id)
        if (!prod) return console.log(`Product ID ${id} Not Found`)
        
        const index = prods.findIndex(prod => prod.id === id)

        if (index === -1) return console.log(`Product ID ${id} Was Deleted`)

        prods[index].nombre = product.nombre
        prods[index].precio = product.precio
        prods[index].categoria = product.categoria
        prods[index].description = product.description
        prods[index].color = product.color
        prods[index].thumbnail = product.thumbnail
        prods[index].code = product.code
        prods[index].stock = product.stock
        await fs.writeFile(path, JSON.stringify(prods))

        return console.log('Product Updated')

    }
    //ID Autoincremental
    async idProduct() {
        const products = JSON.parse(await fs.readFile(path, 'utf-8'))
        if (products.length < 1) return 1
        const ids = products.map(product => product.id)
        const id = Math.max(...ids) + 1
        return id
    }

}