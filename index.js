const express = require('express'); //exportar express
const app = express(); //guardar express en variable para que se aplique al codigo 
const PORT = 3000;
app.use(express.json()) //parsea los datos del body, sino es undefined

app.use('/users',require('./routes/users.js')) //esta linea anade users a la ruta del servidor//











//////levantar el servidor/////
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
})