import { useEffect, useState } from "react"
import { apiVideos } from "../../../../lib/axios/axios"
import {
  ArrowLeftStyle,
  ArrowRightStyle,
  ContainerDiv,
  Div,
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

      setVideos(serieA)
    })
  }, [])

  const [teamsVideos, setVideos] = useState([])

  function swipeLeft() {}

  function swipeRight() {
    setValueUno(indixZero + 1)
    setValueTwo(indexThree + 1)
  }

  let [indixZero, setValueUno] = useState(0)
  let [indexThree, setValueTwo] = useState(3)

  let threeItems = teamsVideos.slice(indixZero, indexThree)

  return (
    <ContainerDiv>
      <ArrowLeftStyle
        src={ArrowLeft}
        alt="seta para esquerda"
        onClick={swipeLeft}
      />

      {threeItems.map((items) => {
        return (
          <Div
            key={1}
            dangerouslySetInnerHTML={{
              __html: items.videos[0].embed,
            }}
          ></Div>
        )
      })}

      <ArrowRightStyle
        src={ArrowRight}
        alt="seta para direita"
        onClick={swipeRight}
      />
    </ContainerDiv>
  )
}
