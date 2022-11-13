import {
  DivContainerNav,
  DivLiNav,
  ImgTeamLiNav,
  LiNav,
  PreviewDivNav,
  ResultNav,
} from "../../style/header/nav"
import { useEffect, useState } from "react"
import { api } from "../../lib/axios"

interface Confrontation {
  time_mandante: {
    nome_popular: string
  }
  time_visitante: {
    nome_popular: string
  }
  nome_popular: string
}

export function ContainerLi() {
  useEffect(() => {
    api.get("campeonatos/10/rodadas/36").then((Response) => {
      //alterar a rodada dinamico importando rounds

      const teamClashes = Response.data.partidas

      setClashes(teamClashes)
    })
  }, [])

  const [teamsAgainst, setClashes] = useState([])

  return (
    <>
      {teamsAgainst.map((teams: Confrontation) => {
        return (
          <DivContainerNav>
            <DivLiNav>
              <LiNav>{teams.time_mandante.nome_popular}</LiNav>
              <LiNav>{teams.time_visitante.nome_popular}</LiNav>
            </DivLiNav>
          </DivContainerNav>
        )
      })}
    </>
  )
}
