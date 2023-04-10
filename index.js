const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const userRoute = require("./src/routes/user")
const productsRoute = require("./src/routes/productos")
const iotRouter = require('./src/routes/Iot')
const ventaRouter = require('./src/routes/venta')
const cors = require("cors")


const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(cors())
app.use(express.json())
app.use('/api', userRoute)
app.use('/api', productsRoute)
app.use('/api', iotRouter)
app.use('/api', ventaRouter)

//Rutassto
app.get("/", (req, res) => {
  res.send('Bienvenido a la Api')
})

//conexion mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a Mongodb Atlas"))
  .catch((error) => console.error(error))

app.listen(port, () => console.log("Server listening to", port))