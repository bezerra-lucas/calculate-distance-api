import axios from "axios";
import getCoordinatesForAddress from "./getCoordinatesForAddress.js";
import { apiKey } from "./../index.js";

export default async function calculateDistance(
  startAddress,
  destinationAddress
) {
  try {
    const coords1 = await getCoordinatesForAddress(startAddress);
    const coords2 = await getCoordinatesForAddress(destinationAddress);

    const url = `http://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${coords1.latitude},${coords1.longitude}&destinations=${coords2.latitude},${coords2.longitude}&travelMode=driving&key=${apiKey}`;

    const response = await axios.get(url);
    const data = response.data;

    const distance =
      data.resourceSets[0].resources[0].results[0].travelDistance;

    return distance;
  } catch (error) {
    console.error(error);
  }
}
