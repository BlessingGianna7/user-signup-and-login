const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./swagger.json');
dotenv.config({path:'./.env'});
const app= express();

 
mongoose.connect(process.env.DB_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Connected to database successfully"))
.catch(err=>console.log(err))


 app.use(express.json());
 app.use("/swagger",swaggerUi.serve,swaggerUi.setup(swaggerJson))
 app.use(require('./routers/student.routers'));
 app.use(require('./routers/teacher.routers'));
 app.use(require('./routers/user.router'));





 app.listen(process.env.PORT ,()=>{console.log('the server has started running')});