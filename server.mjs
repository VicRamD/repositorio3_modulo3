import express from 'express';

//Crear una instancia de express
const app = express();
//Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

//Ruta home
app.get('/', (req, res)=>{
    res.send("¡Bienvenido!");
});

//Ruta GET con parámetro de ruta
/*Solicitud http://localhost:3000/user/123 */
app.get('/user/:id', (req,res)=>{
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});