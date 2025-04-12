//const express = require('express');

import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
// import Product from './models/product.model.js';
// import mongoose from 'mongoose';
//const Product = require('./models/product.model');
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(express.json());//middlewear allows us to accept JSON data in the req.body

// app.get("/api/products", async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json({success:true, data: products});//200 means success
//     } catch (error) {
//         console.log("Error in fetching products:", error.message);
//         res.status(500).json({success:false, message: 'Server error'});//internal server error
//     }
// })


app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost: " + PORT);
});



//Ziq2WfMLsTuR7qmh