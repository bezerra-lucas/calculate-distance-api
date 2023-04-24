import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import calculateDistance from "./src/calculateDistance.js";

dotenv.config();
export const apiKey = process.env.BING_MAPS_API_KEY;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/calculate-distance", async (req, res) => {
  const { body } = req;

  const startAddress = body.startAddress;
  const destinationAddress = body.destinationAddress;

  if (!startAddress || !destinationAddress) {
    res.status(400).send("Missing startAddress or destinationAddress");
    return;
  }

  const distance = await calculateDistance(startAddress, destinationAddress);

  res.status(200).send({ distance });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
