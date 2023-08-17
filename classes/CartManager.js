import { promises as fs } from "node:fs"

export default class CartManager {
    constructor() {
        this.path = './data/carts.json'
    }
    //Métodos
    async getCart(id) {
        const carts = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        return carts.find(cart => cart.id === Number(id))
    }

    async createCart() {
        const cart = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const id = await this.idCart()
        cart.push({ id, products: [] })
        await fs.writeFile(this.path, JSON.stringify(cart))
    }

    async addPorductToCart(cid, pid) {
        const carts = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if (!carts.length) return null
        const index = carts.findIndex(cart => cart.id === cid)

        if (index === -1) return console.log(`Cart ID Not Found`)
        const pids = carts[index].products.map(prod => prod.id)
        if (!pids.includes(pid)) {
            carts[index].products.push({ id: pid, quantity: 1 })
        } else {
            const newCountProd = carts[index].products.map(prod => ({ id: prod.id, quantity: Number(prod.quantity) + 1 }))
            console.log(newCountProd)
            carts[index] = { ...carts[index], products: [...newCountProd] }
        }

        await fs.writeFile(this.path, JSON.stringify(carts))
    }

    async idCart() {
        const carts = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if (carts.length < 1) return 1
        const ids = carts.map(cart => cart.id)
        const id = Math.max(...ids) + 1
        return id
    }
}