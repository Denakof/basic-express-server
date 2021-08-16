'use strict'
const { query } = require('express');
const express =require('express');

const app = express()
app.use(express.json())

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerHandler = require('./middleware/logger');
const ValidatorHandler = require('./middleware/validator');



app.get('/', (req,res)=>{
    res.status(200).send('Hi this is Home page')
})

app.get('/person',ValidatorHandler ,(req,res)=>{
{req.query}
})


app.use('*', notFoundHandler);
app.use(errorHandler);


app.use(loggerHandler);

module.exports ={
    server:app,
    start : port =>{
        app.listen(port, ()=>{
            console.log(`working on port ${port}`);
        })
    }
}