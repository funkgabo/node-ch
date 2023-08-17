import { Router } from 'express';
import CartManager from '../../classes/CartManager.js';
const cartRouter = Router();

cartRouter.get('/', async (req, res) => {
    const manager = new CartManager()
    const cart = await manager.getCart()
    if (cart)
        res.status(200).json(cart)
    else
        res.status(400).send('There is no Any Cart Created Yet')
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
    const cart = await manager.getCart()
    if (cart) {
        await manager.addPorductToCart(Number(cid), Number(pid))
        res.status(200).send('Product Added')
    } else {
        res.status(400).send('There is no Any Cart Created Yet')
    }
});

export default cartRouter;