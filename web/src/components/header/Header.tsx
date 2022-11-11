import { HeaderStyle, LogoStyle } from "../../style/header/header"
import Nav from "./Nav"

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle>Ewt</LogoStyle>
      <Nav />
    </HeaderStyle>
  )
}

export default Header
