import styled from "styled-components"

export const NavStyle = styled.nav`
  width: 20vw;
  height: 93vh;
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const RoundNav = styled.p`
  width: 100%;
  height: 5vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: black;
`

export const UlNav = styled.ul`
  width: 100%;
  height: 95%;
  overflow-y: auto;
  overflow-x: hidden;
`

export const DivContainerNav = styled.div`
  width: 100%;
  height: 10vh;
  border: 1px solid black;
  border-radius: 10px;
  margin: 2vh 0px;
  display: flex;
  justify-content: space-between;
`

export const DivLiNav = styled.div`
  width: 70%;
`

export const LiNav = styled.li`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Roboto", sans-serif;
`

export const ImgTeamLiNav = styled.img`
  width: 25px;
`

export const PreviewDivNav = styled.div`
  width: 30%;
`

export const ResultNav = styled.p`
  color: rgb(79, 78, 78);
`
