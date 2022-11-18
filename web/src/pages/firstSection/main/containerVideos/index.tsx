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
  teamsVideos: {
    videos: string[]
  }
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

  let [index, setIndex] = useState(0)

  function swipeRight() {
    // indexValue

    if (index !== teamsVideos.length - 1) {
      setIndex(index + 1)
    } else {
      index = -1
      setIndex(index + 1)
    }
  }

  function swipeLeft() {
    // indexValue

    if (index <= 0) {
      setIndex((index = teamsVideos.length - 1))
    } else {
      setIndex(index - 1)
    }
  }

  // console.log(teamsVideos.length)

  let gamesRounds

  if (teamsVideos[index]) {
    gamesRounds = teamsVideos[index].videos[0].embed
  }

  return (
    <ContainerDiv>
      <ArrowLeftStyle
        src={ArrowLeft}
        alt="seta para esquerda"
        onClick={swipeLeft}
      />
      {/* <StyleDivLeft
        dangerouslySetInnerHTML={{
          __html: "",
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

      <ArrowRightStyle
        src={ArrowRight}
        alt="seta para direita"
        onClick={swipeRight}
      />
    </ContainerDiv>
  )
}
