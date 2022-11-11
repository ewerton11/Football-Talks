import { useState } from "react"
import axios from "axios"
import { RoundNav } from "../../style/header/nav"

export default function Rounds() {
  function getTeams() {
    axios("../../../dataGames.json")
      .then((Response) => {
        const data = Response.data
        const rounds = data.items[0].round

        setRound(rounds.brasileirao)
      })
      .catch((erro) => console.log(erro))
  }
  getTeams()

  const [brasileirao, setRound] = useState()

  return <RoundNav>Rodada {brasileirao}</RoundNav>
}
