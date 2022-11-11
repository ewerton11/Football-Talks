import axios from "axios"

export const api = axios.create({
  method: "get",
  baseURL: "../../dataGames.json",
})
