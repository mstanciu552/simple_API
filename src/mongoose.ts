import mongoose from "mongoose";

export default (): void => {
  mongoose
    .connect("mongodb://localhost:27017/test1", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB running"))
    .catch((err: String) => console.error(err));
};
