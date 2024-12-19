import { readLyrics, writeLyrics } from "./helpers.js";


//we need a async function to retrieve our lyrics data from taylor.json
//we need the declare a variable called getAllLyrics and await our readLyrics
//we need to return the all of the lyrics

export async function getAllLyrics() {
    const lyrics = await readLyrics();
    return lyrics;
  }
 
  
console.log(getAllLyrics)