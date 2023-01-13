import axios from "axios"

const token = "live_23f030f9d148ccbf450e230a0410ff"

export const api = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1/",
  headers: {
    authorization: `Bearer ${token}`,
  },
})

export const apiVideos = axios.create({
  baseURL: "https://www.scorebat.com/video-api/v3/",
})
