import { NavStyle, UlNav } from "../../style/header/nav"
import ContainerLi from "./ContainerLi"
import Rounds from "./Rounds"

export default function Nav() {
  return (
    <NavStyle>
      <Rounds />
      <UlNav>
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
        <ContainerLi />
      </UlNav>
    </NavStyle>
  )
}
