import Person from "./person.js";
import dotenv from "dotenv";
import connectToDatabase from "./src/database/connect.js";

dotenv.config();

connectToDatabase();

//import "./modules/fs.js";
//import "./modules/path.js";
//import "./modules/http.js";

import "./modules/express.js";

// const person = new Person("Cláudio");
