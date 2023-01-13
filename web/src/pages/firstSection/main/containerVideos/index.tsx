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
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    apiVideos.get('').then((response) => {
      const data = response.data.response
      const serieA = data.filter(
        (league: SerieA) => league.competition === 'BRASIL: Serie A'
      )

      setVideos(serieA.length === 0 ? data : serieA)
    })
  }, [])

  function swipeLeft() {
    setCurrentIndex(
      (currentIndex + teamsVideos.length - 1) % teamsVideos.length
    )
  }

  function swipeRight() {
    setCurrentIndex((currentIndex + 1) % teamsVideos.length)
  }

  const threeItems = [
    teamsVideos[currentIndex],
    teamsVideos[(currentIndex + 1) % teamsVideos.length],
    teamsVideos[(currentIndex + 2) % teamsVideos.length],
  ]

  const hasUndefined = threeItems.some((item) => item === undefined)

  return (
    <ContainerDiv>
      <ArrowLeftStyle
        src={ArrowLeft}
        alt="seta para esquerda"
        onClick={swipeLeft}
      />

      {hasUndefined
        ? ''
        : threeItems.map((items: Video) => {
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
