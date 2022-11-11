import {
  DivContainerNav,
  DivLiNav,
  ImgTeamLiNav,
  LiNav,
  PreviewDivNav,
  ResultNav,
} from "../../style/header/nav"
import Flamengo from "../../assets/teams/Flamengo.png"
import Fluminense from "../../assets/teams/Fluminense.png"

const ContainerLi = () => {
  return (
    <DivContainerNav>
      <DivLiNav>
        <LiNav>
          Fluminense
          <ImgTeamLiNav src={Fluminense} alt="Fluminense" />
          <ResultNav>(0)</ResultNav>
        </LiNav>
        <LiNav>
          Flamengo
          <ImgTeamLiNav src={Flamengo} alt="Flamengo" />
          <ResultNav>(0)</ResultNav>
        </LiNav>
      </DivLiNav>
      <PreviewDivNav>video</PreviewDivNav>
    </DivContainerNav>
  )
}

export default ContainerLi
