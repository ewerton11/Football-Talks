import { useEffect, useState } from 'react'
import { apiVideos } from '../../../../lib/axios/axios'
import { ArrowLeftStyle, ArrowRightStyle, ContainerDiv, Div } from './style'
import ArrowLeft from '../../../../assets/arrowLeft.svg'
import ArrowRight from '../../../../assets/arrowRight.svg'

interface SerieA {
  competition: string
}

interface Video {
  videos: [{ embed: string }]
}

export default function FirstSection() {
  const [teamsVideos, setVideos] = useState([])

  useEffect(() => {
    apiVideos.get('').then((Response) => {
      //alterar a rodada dinamico importando rounds

      const data = Response.data.response
      const serieA = data.filter(
        (ligue: SerieA) => ligue.competition === 'BRASIL: Serie A'
      )

      if (serieA.length === 0) {
        const allChampions = data.filter((ligue: SerieA) => ligue)

        setVideos(allChampions)
      } else {
        setVideos(serieA)
      }
    })
  }, [])

  let [firstIndex, setFirstIndex] = useState(0)
  let [secondIndex, setSecondIndex] = useState(1)
  let [thirdIndex, setThirdIndex] = useState(2)

  function swipeLeft() {
    if (firstIndex === 0) {
      setFirstIndex(teamsVideos.length - 1)
      setSecondIndex(secondIndex - 1)
      setThirdIndex(thirdIndex - 1)
    } else if (secondIndex === 0) {
      setFirstIndex(firstIndex - 1)
      setSecondIndex(teamsVideos.length - 1)
      setThirdIndex(thirdIndex - 1)
    } else if (thirdIndex === 0) {
      setFirstIndex(firstIndex - 1)
      setSecondIndex(secondIndex - 1)
      setThirdIndex(teamsVideos.length - 1)
    }
  }

  function swipeRight() {
    if (firstIndex === teamsVideos.length - 1) {
      setFirstIndex((firstIndex = 0))
      setSecondIndex(secondIndex + 1)
      setThirdIndex(thirdIndex + 1)
    } else if (secondIndex === teamsVideos.length - 1) {
      setFirstIndex(firstIndex + 1)
      setSecondIndex((secondIndex = 0))
      setThirdIndex(thirdIndex + 1)
    } else if (thirdIndex === teamsVideos.length - 1) {
      setFirstIndex(firstIndex + 1)
      setSecondIndex(secondIndex + 1)
      setThirdIndex((thirdIndex = 0))
    }
  }

  let threeItems = [
    teamsVideos[firstIndex],
    teamsVideos[secondIndex],
    teamsVideos[thirdIndex],
  ]

  return (
    <ContainerDiv>
      <ArrowLeftStyle
        src={ArrowLeft}
        alt="seta para esquerda"
        onClick={swipeLeft}
      />

      {threeItems.map((items: Video) => {
        return (
          <Div
            key={Math.random()}
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
