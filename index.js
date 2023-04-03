const express = require('express'); //exportar express
const app = express(); //inicializamos express 
const PORT = 3000;
app.use(express.json()) //parsea los datos del body, sino es undefined

///rutas users///
app.use('/users',require('./routes/users.js')) //esta linea anade users a la ruta del servidor//


///rutas products///
app.use('/products',require('./routes/products.js'))

///rutas categories///
app.use('/categories', require('./routes/categories.js'))









//////levantar el servidor/////
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
})