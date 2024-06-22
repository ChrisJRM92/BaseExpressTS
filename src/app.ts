import express, {Request, Response} from 'express' //Importamos express y usamos los tipos Request y Response

const app = express() //Llama a la función express que retorna una nueva instancia de una aplicación Express.
const port = 3000; //Difinimos un puerto de escucha

//Utilizamos un metodo get a la ruta / para enviar una respuesta al cliente
app.get ('/', (req: Request, res:Response)=>{
  res.send('Test metodo get')
})

//Utilizamos el metodo listen para que nuestra app escuche mediante el puerto asignado
app.listen(port, ()=>{
  console.log(`Servidor montado en puerto ${port} 👽`)
})