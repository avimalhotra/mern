import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // res.header('Access-Control-Allow-Origin',"*")
  return res.status(200).json({"message":"Express Server running"});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});