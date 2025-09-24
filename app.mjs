import express from 'express';

//Crear una instancia de express
const app = express();

//Configurar el puerto en el que el servidor escuchara
const PORT = 3000;

//Ruta básica
app.get('/', (req, res)=>{
    res.send("¡Hola, Mundo!");
});

//Ruta para recibir datos simples
app.get('/datos', (req, res)=>{
    res.send("Datos recibidos");
});

//Inicializar el servidor
/*Solicitud http://localhost:3000/datos */
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});