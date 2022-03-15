import axios from "axios";

export default async function getData(endpoint) {
  let response = await axios.get(`https://wizard-world-api.herokuapp.com/${endpoint}`);
  return response.data;
}

export async function getCharData(endpoint) {
  let charResponse = await axios.get(`https://hp-api.herokuapp.com/api/characters`);
  return charResponse.data
}