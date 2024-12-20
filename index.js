import express from "express";

const index = express();

index.use(express.json()); // // Middleware to parse incoming JSON requests and make it available under req.bodyapp.use(express.json());

const PORT = 5000;

import {getAllLyrics,
  getLyricsByID, 
} from "./functions.js";




index.get("/lyrics", async function (req, res) {
  const allLyrics = await getAllLyrics();
  res.json(allLyrics);
});


index.get("/lyrics/:id", async function (req, res){
  const {id} = req.params
  const lyrics = await getLyricsByID(id);
  res.json(lyrics)
} )

index.get("/", function (req, res) {
    res.send("Welcome to the inspirational Taylor Swift quotes API");
  });

index.listen(PORT, function () {
    console.log(`Server is now listening on http://localhost:${PORT}`);
  });

