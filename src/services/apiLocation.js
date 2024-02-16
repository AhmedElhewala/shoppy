import axios from "axios";
import { OPENCAGEGEOCODING_API } from "../utilities/constants";

export async function getLocation(location) {
  try {
    const req = await axios.get(`
      https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGEGEOCODING_API}&q=${location.latitude}+${location.longitude}&pretty=1
    `);

    const country = req.data.results[0].components.country;
    const state = req.data.results[0].components.state;
    const road = req.data.results[0].components.road;

    // currency = req.data.results[0].annotations.currency

    return {country, state, road};
  } catch(err) {
    throw new Error(`Error fetching the location ${err.message}`);
  }
}