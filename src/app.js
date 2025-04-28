import fecha from "./time.js";
import  express  from "express";

const app = express()

app.get('/hora', (req, res) => {
    res.send(fecha.hora())
})

app.get('/fecha-completa', (req, res) => {
    res.send(fecha.fechaCompleta())
})


export default app;