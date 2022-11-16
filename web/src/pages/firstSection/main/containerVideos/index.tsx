import { useEffect, useState } from "react"
import { apiVideos } from "../../../../lib/axios/axios"
import { ContainerDiv, StyleDiv } from "./style"

export default function FirstSection() {
  useEffect(() => {
    apiVideos.get("").then((Response) => {
      //alterar a rodada dinamico importando rounds

      const teamClashes = Response.data.response

      setClashes(teamClashes)
    })
  }, [])

  const [teamsAgainst, setClashes] = useState([])

  // teamsAgainst.map((item) => console.log(item.videos[0].embed))

  return (
    <ContainerDiv>
      {teamsAgainst.map((videos) => {
        return <StyleDiv>{videos.videos[0].embed}</StyleDiv>
      })}
    </ContainerDiv>
  )
}
