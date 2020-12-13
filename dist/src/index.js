"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const mongoose_1 = __importDefault(require("./mongoose"));
const app = express_1.default();
const port = 3000;
//Set up database
mongoose_1.default();
// Set up body parser
app.use(express_1.default.json());
// Set up routes
app.use("/", index_1.default);
app.listen(port, () => console.log(`Server running on port ${port}`));
