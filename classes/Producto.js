export default class Producto {
    constructor(nombre, precio, categoria, description, color, thumbnail, code , stock, status ) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.description = description
        this.color = color
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.status = status
    }
}