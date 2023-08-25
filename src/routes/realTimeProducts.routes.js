import { Router } from "express";

const realTimeProductsRouter = Router()

realTimeProductsRouter.get('/',  (req, res) => {
    res.render('realTimeProducts', {
        css: "style.css",
        title: "RealTimeProducts",
        js: "realTimeProducts.js",
    })
})

export default realTimeProductsRouter