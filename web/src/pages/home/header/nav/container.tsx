import { NavStyle, UlNav } from "./style"

import { ContainerLi } from "./liContainer/container"
import Rounds from "./rounds"

export default function Nav() {
  return (
    <NavStyle>
      <Rounds />
      <UlNav>
        <ContainerLi />
      </UlNav>
    </NavStyle>
  )
}
