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
              <LiNav>
                <ImgTeamLiNav src={teams.time_mandante.escudo} alt="" />
                {teams.time_mandante.nome_popular}
                <ResultNav>({teams.placar_mandante})</ResultNav>
              </LiNav>
              <LiNav>
                <ImgTeamLiNav src={teams.time_visitante.escudo} />
                {teams.time_visitante.nome_popular}
                <ResultNav>({teams.placar_visitante})</ResultNav>
              </LiNav>
            </DivLiNav>
          </DivContainerNav>
        )
      })}
    </>
  )
}
