/**
 * MAIN IIFE
 */
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

(async ()=>{
    try {
        app.use(cors());
        app.use(express.json());
        app.use('/files', express.static(path.resolve(__dirname,'uploads')))
        const database = await require('./config/database');
        require('./api/api')(app);
    } catch (error) {
        console.trace(error)
        app.use((req,resp)=>{
            resp.send('Error on Server');
        })
    }
    
    app.listen(8080)
})()