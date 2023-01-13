import { useEffect, useState } from 'react'

import Header from './header'
import { api } from '../../lib/axios/axios'

import * as style from './style'
import Section from './section'

interface Confrontation {
  time_mandante: {
    nome_popular: string
    escudo: string
  }
  time_visitante: {
    nome_popular: string
    escudo: string
  }
  placar_mandante: number
  placar_visitante: number
}

export default function Home() {
  useEffect(() => {
    api.get('campeonatos/10').then((Response) => {
      const dataRound = Response.data.rodada_atual.nome

      setRound(dataRound)
    })
  }, [])

  const [brasileirao, setRound] = useState()

  useEffect(() => {
    api.get('campeonatos/10/rodadas/38').then((Response) => {
      //alterar a rodada dinamico importando rounds

      const teamClashes = Response.data.partidas

      setClashes(teamClashes)
    })
  }, [])

  const [teamsAgainst, setClashes] = useState([])

  return (
    <>
      <Header />
      <style.Main>
        <style.ContainerRound>
          <style.Round>{brasileirao}</style.Round>
          <style.ContainerTeams>
            {teamsAgainst.map((teams: Confrontation) => {
              return (
                <style.Confrontation key={Math.random()}>
                  <style.Teams>
                    <style.ImgTeams
                      src={teams.time_mandante.escudo}
                      alt="logo-team"
                    />
                    {teams.time_mandante.nome_popular}
                    <style.Results>({teams.placar_mandante})</style.Results>
                  </style.Teams>
                  <style.Teams>
                    <style.ImgTeams
                      src={teams.time_visitante.escudo}
                      alt="logo-team"
                    />
                    {teams.time_visitante.nome_popular}
                    <style.Results>({teams.placar_visitante})</style.Results>
                  </style.Teams>
                </style.Confrontation>
              )
            })}
          </style.ContainerTeams>
        </style.ContainerRound>
        <Section />
      </style.Main>
    </>
  )
}
