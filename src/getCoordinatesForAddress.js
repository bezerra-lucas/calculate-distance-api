import axios from "axios";
import { apiKey } from "./../index.js";

export default async function getCoordinatesForAddress(address) {
  const url = `http://dev.virtualearth.net/REST/v1/Locations?query=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  const response = await axios.get(url);
  const data = response.data;

  if (data.resourceSets[0].resources.length > 0) {
    const coords = data.resourceSets[0].resources[0].point.coordinates;
    return { latitude: coords[0], longitude: coords[1] };
  } else {
    throw new Error("Address not found");
  }
}
