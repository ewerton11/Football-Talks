import { useEffect, useState } from "react"
import { apiVideos } from "../../../../lib/axios/axios"
import { ContainerDiv, Divvv, StyleDiv } from "./style"

export default function FirstSection() {
  useEffect(() => {
    apiVideos.get("").then((Response) => {
      //alterar a rodada dinamico importando rounds

      const teamClashes = Response.data.response

      setClashes(teamClashes)
    })
  }, [])

  const [teamsAgainst, setClashes] = useState([])

  return (
    <ContainerDiv>
      <StyleDiv
        dangerouslySetInnerHTML={{
          __html: teamsAgainst
            .filter((item) => item.competition === "BRASIL: Serie A")
            .map((item) => item.videos[0].embed),
        }}
      ></StyleDiv>
    </ContainerDiv>
  )
}
