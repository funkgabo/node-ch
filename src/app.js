import express from 'express'
import prodsRouter from './routes/products.routes.js'
import cartRouter from './routes/carts.routes.js'

const app = express()
const PORT = 4000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.use('/products', prodsRouter)
app.use('/cart', cartRouter)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})