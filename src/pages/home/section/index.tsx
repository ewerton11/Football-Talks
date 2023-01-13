import { useEffect, useState } from 'react'

import { apiVideos } from '../../../lib/axios/axios'
import ArrowLeft from '../../../assets/arrowLeft.svg'
import ArrowRight from '../../../assets/arrowRight.svg'

import * as style from './style'

interface SerieA {
  competition: string
}

interface Video {
  videos: [{ embed: string }]
}

export default function Section() {
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
    <style.Section>
      <style.ContainerVideos>
        <style.ArrowLeftStyle
          src={ArrowLeft}
          alt="seta para esquerda"
          onClick={swipeLeft}
        />

        {hasUndefined ? (
          <style.h1Loading>Carreagando...</style.h1Loading>
        ) : (
          threeItems.map((items: Video) => {
            return (
              <style.Div
                key={Math.random()}
                dangerouslySetInnerHTML={{
                  __html: items.videos[0].embed,
                }}
              ></style.Div>
            )
          })
        )}

        <style.ArrowRightStyle
          src={ArrowRight}
          alt="seta para direita"
          onClick={swipeRight}
        />
      </style.ContainerVideos>
    </style.Section>
  )
}
