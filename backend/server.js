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



// app.post('/api/products', async (req, res) => {
//     const product = req.body; //user will send this data 

//     if (!product.name || !product.price || !product.image) {
//         return res.status(400).json({success:false, message: 'Please provide all fields' });
//     }

//     const newProduct = new Product(product)
//     try {
//         await newProduct.save();
//         res.status(201).json({success:true, data: newProduct});//something created
//     } catch (error) {
//         console.error("Error in Creat product:", error.message);
//         res.status(500).json({success:false, message: 'Server error'});//internal server error
//     }
// });

// //Postman desktop app

// app.put("/api/products/:id", async (req, res) => {
//     const { id } = req.params; //:id is a dynamic parameter
//     const product = req.body;

//     console.log("Update request for ID:", id);
//     console.log("Body received:", product);

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({success:false, message: 'Invalid product ID' });
//     }

//     try {
//         const updatedProduct= await Product.findByIdAndUpdate(id, product, { new: true });
//         res.status(200).json({success: true, data: updatedProduct }); 
//     } catch (error) {
//         res.status(500).json({success:false, message: 'Server error'});//internal server error
//     }
// })

// //:id is a dynamic parameter
// app.delete("/api/products/:id", async (req, res) => {
//     const { id } = req.params;
//     console.log("id:", id);
//     try {
//         await Product.findByIdAndDelete(id);
//         res.status(200).json({ success: true, message: "Product deleted" });
//     }catch (error) {
//         console.log("error in deleting product:", error.message);
//         res.status(404).json({ success: false, message: "Product not found" });
//     }
// });
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost: " + PORT);
});

//Ziq2WfMLsTuR7qmh