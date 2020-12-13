import express from "express";

import routes from "./routes/index";
import mongoSetup from "./mongoose";

const app = express();
const port: Number = 3000;

//Set up database
mongoSetup();

// Set up body parser
app.use(express.json());

// Set up routes
app.use("/", routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
