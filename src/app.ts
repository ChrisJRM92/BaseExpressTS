import express, {Request, Response} from 'express'

const app = express()
const port = 3000

app.listen(port, ()=>{
  console.log(`Servidor montado en puerto: ${port}`)
})

app.get('/:id', (req: Request, res: Response)=>{
  res.send(`Hola ${req.params.id} bienvenido`)
})

