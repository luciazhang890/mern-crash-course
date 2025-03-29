//const express = require('express');

import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import Product from './models/productModel.js';

dotenv.config();

const app = express();

app.post('/api/products', async (req, res) => {
    const product = req.body; //user will send this data 

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: 'Please provide all fields' });
    }

    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({success:false, message: 'Server error'});
    }
});

//Postman desktop app

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 ");
});

//Ziq2WfMLsTuR7qmh