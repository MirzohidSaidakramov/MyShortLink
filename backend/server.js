const express = require('express');
app = express();

require('./startup/database')();
require('./startup/json') (app);
require('./startup/router') (app);

port  = process.env.PORT || 5555;
app.listen(port,()=>{
    console.log(`${port} Portni eshityapman`);
}

)