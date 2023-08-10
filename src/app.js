import express, { json } from 'express'
import ProductManager from '../classes/ProductManager.js'

const app = express()
const PORT = 4000
const path = '../data/products.js'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.get('/products', async (req, res) => {
    const { limit } = req.query
    
    if (limit) {
        const manager = new ProductManager()
        const products = await manager.getProductos()
        const filteredProducts = products.slice(0, limit)
        res.json(filteredProducts)
    } else {
        const manager = new ProductManager()
        const products = await manager.getProductos()
        res.json(products)
    }

})
app.get('/product/:id', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})