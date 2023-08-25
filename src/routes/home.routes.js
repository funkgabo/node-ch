import { Router } from "express";

const homeRouter = Router()

homeRouter.get('/',  (req, res) => {
    res.render('home', {
        css: "style.css",
        title: "Home",
        js: "home.js",
    })
})

export default homeRouter