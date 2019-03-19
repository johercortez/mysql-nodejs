const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const express = require('express');
const app = express();

//rutas
const customerRoutes = require('./routes/customer')

app 
    //configuraciones
    .set('port', process.env.PORT || 3000)
    .set('view engine','ejs')
    .set('views', path.join(__dirname,'views'))
    
    //midleware
    .use(morgan('dev'))
    .use(myconnection(mysql,{
        host:'localhost',
        user: 'root',
        password: '',
        port: '3306',
        database: 'crud'
    }, 'single'))
    .use(express.urlencoded({extended:false}))

    //ROUTES
    .use('/',customerRoutes)

    //static files
    .use(express.static(path.join(__dirname,'public')))

    .listen(app.get('port'),()=>{
        console.log('servidor en el puerto 3000')
    });