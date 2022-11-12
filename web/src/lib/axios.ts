import axios from "axios"

const token = "live_23f030f9d148ccbf450e230a0410ff"
// const token = "test_4c8dd1efeaf45420ccd8bad27120a7"

export const api = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1/",
  headers: {
    authorization: `Bearer ${token}`,
  },
})
