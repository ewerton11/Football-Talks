import { useEffect, useState } from "react"
import { apiVideos } from "../../../../lib/axios/axios"
import {
  ArrowLeftStyle,
  ArrowRightStyle,
  ContainerDiv,
  StyleDiv,
  StyleDivLeft,
  StyleDivRigth,
} from "./style"
import ArrowLeft from "../../../../assets/arrowLeft.svg"
import ArrowRight from "../../../../assets/arrowRight.svg"

interface SerieA {
  competition: string
}

export default function FirstSection() {
  useEffect(() => {
    apiVideos.get("").then((Response) => {
      //alterar a rodada dinamico importando rounds

      const data = Response.data.response
      const serieA = data.filter(
        (ligue: SerieA) => ligue.competition === "BRASIL: Serie A"
      )

      // console.log(serieA.length)

      setVideos(serieA)
    })
  }, [])

  const [teamsVideos, setVideos] = useState([])

  const [index, setIndex] = useState(0)

  function swipeLeft() {
    // indexValue

    setIndex(index + 1)
  }

  let gamesRounds = teamsVideos[index].videos[0].embed

  return (
    <ContainerDiv>
      <ArrowLeftStyle
        src={ArrowLeft}
        alt="seta para esquerda"
        onClick={swipeLeft}
      />
      {/* <StyleDivLeft
        dangerouslySetInnerHTML={{
          __html: zero,
        }}
      ></StyleDivLeft> */}
      <StyleDiv
        dangerouslySetInnerHTML={{
          __html: gamesRounds,
        }}
      ></StyleDiv>
      {/* <StyleDivRigth
        dangerouslySetInnerHTML={{
          __html: dois,
        }}
      ></StyleDivRigth> */}

      <ArrowRightStyle src={ArrowRight} alt="seta para direita" />
    </ContainerDiv>
  )
}
