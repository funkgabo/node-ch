import { Router } from 'express';
import CartManager from '../../classes/CartManager.js';
const cartRouter = Router();

cartRouter.get('/:id', async (req, res) => {
    const manager = new CartManager()
    const cart = await manager.getCart(Number(req.params.id))
    if (cart)
        res.status(200).json(cart)
    else
        res.status(400).send('There is no Any Cart Created Yet or Cart Not Found')
});

cartRouter.post('/', async (req, res) => {
    const manager = new CartManager()
    await manager.createCart()
    res.status(200).send('Cart Created')
});

cartRouter.post('/:cid/product/:pid', async (req, res) => {
    const { cid } = req.params
    const { pid } = req.params
    const manager = new CartManager()
    const cart = await manager.getCart(Number(cid))
    console.log(cart)
    if (cart) {
        await manager.addPorductToCart(Number(cid), Number(pid))
        res.status(200).send('Product Added')
    } else {
        res.status(400).send('There is no Any Cart Created Yet or This cart just not exist')
    }
});

export default cartRouter;