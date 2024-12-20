

import { readLyrics, writeLyrics } from "./helpers.js";

import { v4 as uuidv4 } from "uuid";




//we need a async function to retrieve our lyrics data from taylor.json
//we need the declare a variable called getAllLyrics and await our readLyrics
//we need to return the all of the lyrics

export async function getAllLyrics() {
    const lyrics = await readLyrics();
    return lyrics;
  }
 
//we need an async function to retrieve our lyrics data from taylor.json
//we need the declare a variable called getLyricsById and await our readLyrics function
// lyrics.find((lyrics) => lyrics.id === id) We need to search through the lyrics objects and find the first object whose id property is equal to the value of id 
//The result (found) is the object that matches the condition. If no match is found, found will be undefined.
//we need to return the specific lyrics


  export async function getLyricsByID(id) {
    const lyrics = await readLyrics();
  
    const found = lyrics.find((lyrics) => lyrics.id === id);
  
    return found;
  }
