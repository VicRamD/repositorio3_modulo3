import express from 'express';

//Crear una instancia de express
const app = express();

//Configurar el puerto en el que el servidor escuchara
const PORT = 3000;

//Ruta básica
app.get('/', (req, res)=>{
    res.send("¡Hola, Mundo!");
});

//Inicializar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});