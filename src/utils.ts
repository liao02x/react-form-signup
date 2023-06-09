import {
  AUTH_ENDPOINT,
  STATES_ENDPOINT,
  CITIES_ENDPOINT,
  authHeader,
  getApiHeaders,
} from "./config";

export const AUTH_TOKEN_STORAGE_KEY="AUTH_TOKEN_STORAGE_KEY"
const getAuthToken = async () => {
  const authToken = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  if (authToken) {
    return authToken;
  }

  const response = await fetch(AUTH_ENDPOINT, {
    method: "GET",
    headers: authHeader,
  });
  const data = await response.json();

  localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, data.auth_token);
  return data.auth_token;
};

type StateResponse = { state_name: string }[];
export const getStates = async () => {
  const authToken = await getAuthToken();
  const response = await fetch(`${STATES_ENDPOINT}United States`, {
    method: "GET",
    headers: getApiHeaders(authToken),
  });
  const data: StateResponse = await response.json();
  return data.map(({ state_name }) => state_name);
};

type CityResponse = { city_name: string }[];
export const getCities = async (state: string) => {
  const authToken = await getAuthToken();
  const response = await fetch(`${CITIES_ENDPOINT}${state}`, {
    method: "GET",
    headers: getApiHeaders(authToken),
  });
  const data: CityResponse = await response.json();
  return data.map(({ city_name }) => city_name);
};
