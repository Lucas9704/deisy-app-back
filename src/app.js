import express from "express"
import DeisyRoutes from './routes/deisy.routes'

const app = express()


//settings
app.set('port', process.env.PORT || 3000)

app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api' ,DeisyRoutes)

export default app;