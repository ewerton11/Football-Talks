import { Round } from "./style"

import { api } from "../../../../../lib/axios/axios"

import { useEffect, useState } from "react"

export default function Rounds() {
  useEffect(() => {
    api.get("campeonatos/10").then((Response) => {
      const dataRound = Response.data.rodada_atual.nome

      setRound(dataRound)
    })
  }, [])

  const [brasileirao, setRound] = useState()

  return <Round>{brasileirao}</Round>
}
