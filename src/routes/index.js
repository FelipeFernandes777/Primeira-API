import express from 'express';
import book from './bookRoutes.js'
import author from './authorRoutes.js'
import edithor from './edithorRoutes.js'

const routes = (app) => {
    app.route('/').get((req,res) => {

        res.status(200).send({title: "Home Page \n Hello World"})

    })

    app.use(
        express.json(),
        book,
        author,
        edithor
    )
}

export default routes;