const express = require('express'); //exportar express
const app = express(); //inicializamos express 
const PORT = 3000;
app.use(express.json()) //parsea los datos del body, sino es undefined
const { typeError } = require('./middlewares/errors'); //importacion middleware error
const cors = require('cors')

app.use(cors())

///nombre ruta users///
app.use('/users',require('./routes/users.js')) //esta linea anade users a la ruta del servidor//


///nombre ruta products///
app.use('/products',require('./routes/products.js'))

///nombre ruta categories///
app.use('/categories', require('./routes/categories.js'))

//nombre ruta orders///
app.use('/orders', require('./routes/orders.js'))

///aplicacion del middleware///
app.use(typeError)

//////levantar el servidor/////
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
})