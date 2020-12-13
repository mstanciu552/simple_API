"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export default (router: any) => {
//   router.get("/users", (req: any, res: any) => {});
// };
const express_1 = __importDefault(require("express"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    return userSchema_1.default.find({})
        .then((user) => res.send(user))
        .catch((err) => console.error(err));
});
router.get("/:id", (req, res) => {
    return userSchema_1.default.find({ _id: req.params.id })
        .then((user) => res.send(user))
        .catch((err) => console.error(err));
});
router.post("/", (req, res) => {
    const user = new userSchema_1.default({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    });
    return userSchema_1.default.create(user)
        .then((status) => res.send(status))
        .catch((err) => console.error(err));
});
router.delete("/:id", (req, res) => {
    return userSchema_1.default.deleteOne({ _id: req.params.id })
        .then((response) => res.send(response))
        .catch((err) => console.error(err));
});
router.put("/:id", (req, res) => {
    return userSchema_1.default.updateOne({ _id: req.params.id }, {
        $set: {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        },
    })
        .then((response) => res.status(200).json({ message: "Update succesfull" }))
        .catch((err) => console.error(err));
});
exports.default = router;
