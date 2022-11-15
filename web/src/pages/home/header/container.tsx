import Nav from "./nav/container"
import { HeaderStyle, LogoStyle } from "./style"

function Header() {
  return (
    <HeaderStyle>
      <LogoStyle>Ewt</LogoStyle>
      <Nav />
    </HeaderStyle>
  )
}

export default Header
