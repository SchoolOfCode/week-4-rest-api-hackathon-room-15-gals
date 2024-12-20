import { promises as fs } from "node:fs";

import { FILEPATH } from "./config.js";

  

// We need a async function that can read the lyrics readLyrics()
// Define the data variable to read the data from our taylor.json file and we will wait for this to be completed before executing the function
// we want  to return data that is converted from JSON to JavaScript array. 
// we want to use a try and catch statements for error handling 

export async function readLyrics() {
    try {
      const data = await fs.readFile(FILEPATH, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading file:", error);
      return null;
    }
  }
  
// We need a async function that can write an object into lyrics writeLyrics()
//  write the data as a JSON formatted string into our taylor.json file and we will wait for this to be completed before executing the function

// we want to return that this has been successful with a boolean statement that is true  
// we want to use a try and catch statements for error handling 

  export async function writeLyrics(data) {
    try {
      await fs.writeFile(FILEPATH, JSON.stringify(data), "utf8");
      return true;
    } catch (error) {
      console.error("Error writing file:", error);
      return false;
    }
  }
