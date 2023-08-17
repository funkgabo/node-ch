import { Router } from "express";
import ProductManager from "../../classes/ProductManager.js";

const prodsRouter = Router()

prodsRouter.get('/', async (req, res) => {
    const { limit } = req.query
    if (limit) {
        const manager = new ProductManager()
        const products = await manager.getProducts()
        const filteredProducts = products.slice(0, limit)
        res.json(filteredProducts)
    } else {
        const manager = new ProductManager()
        const products = await manager.getProducts()
        res.json(products)
    }
})

prodsRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    if (id) {
        const manager = new ProductManager()
        const product = await manager.getProductById(Number(id))
        console.log(product)
        res.json(product)
    } else {
        console.log('Product not Found')
    }

})

prodsRouter.post('/', async (req, res) => {
    const { code } = req.body
    const manager = new ProductManager()
    const confitmation = await manager.getProductByCode(code)
    if (!confitmation) {
        const manager = new ProductManager()
        await manager.addProduct(JSON.stringify(req.body))
        res.status(200).send(req.body)
    } else {
        res.status(400).send('Product Already Created')
    }
})

prodsRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const manager = new ProductManager()
    const confirmation = await manager.getProductById(id)
    if (confirmation) {
        await manager.UpdateProductById(id, req.body)
        res.status(200).send('Product Updated')
    } else {
        res.status(404).send('Product Not Found')
    }
})

prodsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params
    const manager = new ProductManager()
    const confirmation = await manager.deleteProductById(id)
    console.log(confirmation)
    if (confirmation) {
        console.log(`Product ID ${id} Was Deleted`)
        res.status(200).send(`Product ID ${id} Was Deleted`)
    } else {
        res.status(404).send('Product Not Found')
    }
})

export default prodsRouter