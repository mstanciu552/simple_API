// export default (router: any) => {
//   router.get("/users", (req: any, res: any) => {});
// };
import express from "express";
import User from "../models/userSchema";

const router = express.Router();

router.get("/", (req: any, res: any) => {
  return User.find({})
    .then((user) => res.send(user))
    .catch((err) => console.error(err));
});

router.get("/:id", (req: any, res: any) => {
  return User.find({ _id: req.params.id })
    .then((user) => res.send(user))
    .catch((err) => console.error(err));
});

router.post("/", (req: any, res: any) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });

  return User.create(user)
    .then((status) => res.send(status))
    .catch((err) => console.error(err));
});

router.delete("/:id", (req: any, res: any) => {
  return User.deleteOne({ _id: req.params.id })
    .then((response) => res.send(response))
    .catch((err) => console.error(err));
});

router.put("/:id", (req: any, res: any) => {
  return User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
    }
  )
    .then((response) => res.status(200).json({ message: "Update succesfull" }))
    .catch((err) => console.error(err));
});

export default router;
