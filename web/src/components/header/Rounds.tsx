import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { RoundNav } from "../../style/header/nav"

export default function Rounds() {
  useEffect(() => {
    api.get("campeonatos/10").then((Response) => {
      const dataRound = Response.data.rodada_atual.rodada

      setRound(dataRound)
    })
  }, [])

  const [brasileirao, setRound] = useState()

  return <RoundNav>Rodada {brasileirao}</RoundNav>
}
