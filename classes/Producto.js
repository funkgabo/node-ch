export default class Producto {
    constructor(nombre, precio, categoria, description, color, thumbnail, code , stock ) {
        this.id = Producto.idProducto()
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.description = description
        this.color = color
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
    static idProducto() {
        if(this.idIncrement){
            this.idIncrement++
        }else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}