import express from "express";

const index = express();

index.use(express.json()); // // Middleware to parse incoming JSON requests and make it available under req.bodyapp.use(express.json());

const PORT = 5000;
