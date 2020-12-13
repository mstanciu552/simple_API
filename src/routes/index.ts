import express from "express";
import user from "./user";

const router = express.Router();

router.get("/", (req: any, res: any) => {
  return res.send("<h1>Hello World</h1>");
});

router.use("/users", user);

export default router;
