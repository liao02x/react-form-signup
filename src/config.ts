export const API_KEY = import.meta.env.VITE_API_KEY
const USER_EMAIL = import.meta.env.VITE_USER_EMAIL
export const STATE_INFO_API = import.meta.env.VITE_STATE_INFO_API

export const authHeader = {
  "Accept": "application/json",
  "api-token": API_KEY,
  "user-email": USER_EMAIL,
}

export const getApiHeaders = (token: string) => ({
  "Authorization": `Bearer ${token}`,
  "Accept": "application/json"
})

export const AUTH_ENDPOINT = `${STATE_INFO_API}getaccesstoken/`
export const STATES_ENDPOINT = `${STATE_INFO_API}states/`
export const CITIES_ENDPOINT = `${STATE_INFO_API}cities/`