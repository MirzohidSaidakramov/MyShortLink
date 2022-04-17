const express = require('express');
app = express();

require('./startup/database')();
require('./startup/json') (app);
require('./startup/router') (app);


app.listen(5555,()=>{
    console.log('Portni eshityapman');
}

)