import { promises as fs } from "node:fs"

export default class ProductManager {

    constructor() {
        this.path = './data/products.json'
    }
    //MÉTODOS//

    //1.- Agregar Producto
    async addProduct(product) {
        const jprod = JSON.parse(product)
        console.log(product)
        if (!jprod.nombre || !jprod.precio ||
            !jprod.categoria || !jprod.description || !jprod.color ||
            !jprod.code || !jprod.stock) {
            console.log('All fields are Required')
            return
        }
        jprod.status = !jprod.status ? false : true
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const producto = prods.find(prod => prod.id === product.id)

        if (producto) {
            console.log("Existing Product")
        } else {
            jprod.id = await this.idProduct()
            prods.push(jprod)
            await fs.writeFile(this.path, JSON.stringify(prods))
        }
        return console.log('Product Added')
    }
    //2.- Obtener todos los Productos
    async getProducts() {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        return prods
    }

    //3.- Obtener productos por ID
    async getProductById(id) {
        const idn = Number(id)
        const product = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const searchedProduct = product.filter(product => product.id === idn)
        return searchedProduct.length > 0
            ? searchedProduct
            : console.log(`Product ID ${id} Not Found`)
    }

    //4.- Borrar un producto por ID
    async deleteProductById(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const product = prods.find(prod => prod.id === Number(id))
        if (!product) return console.log(`Product ID ${id} Not Found`)

        await fs.writeFile(this.path, JSON.stringify(prods.filter(prod => prod.id !== Number(id))))
        return product
    }
    //5.- Borrar todos los productos
    async deleteAllProducts() {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        await fs.writeFile(this.path, '[]')
        return console.log('All Products Deleted')
    }
    //6.- Actualizar un Producto
    async UpdateProductById(id, product) {

        const idn = Number(id)
        if (!product.nombre || !product.precio ||
            !product.categoria || !product.description || !product.color ||
            !product.thumbnail || !product.code || !product.stock || !product.status) {
            return console.log('All Product Fields are Required')
        }

        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const prod = prods.find(prod => prod.id === idn)
        if (!prod) return console.log(`Product ID ${idn} Not Found`)

        const index = prods.findIndex(prod => prod.id === idn)

        if (index === -1) return console.log(`Product ID ${idn} Was Deleted`)

        prods[index].nombre = product.nombre
        prods[index].precio = product.precio
        prods[index].categoria = product.categoria
        prods[index].description = product.description
        prods[index].color = product.color
        prods[index].thumbnail = product.thumbnail
        prods[index].code = product.code
        prods[index].stock = product.stock
        prods[index].stock = product.status
        await fs.writeFile(this.path, JSON.stringify(prods))

        return console.log('Product Updated')

    }

    async getProductByCode(code) {
        const product = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const searchedProduct = product.filter(product => product.code === code)
        console.log(searchedProduct)
        return searchedProduct.length > 0
            ? searchedProduct
            : console.log('Cannot Create The Product')
    }

    //ID Autoincremental
    async idProduct() {
        const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if (products.length < 1) return 1
        const ids = products.map(product => product.id)
        const id = Math.max(...ids) + 1
        return id
    }

}