import styled from "styled-components"

export const NavStyle = styled.nav`
  z-index: 2;
  width: 20vw;
  height: 93vh;
  background-color: white;
  border-right: 1px solid rgba(0, 0, 0, 0.18);
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
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.18); */
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
  display: flex;
  flex-direction: column;
`

export const LiNav = styled.li`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
`

export const ImgTeamLiNav = styled.img`
  width: 25px;
  margin-left: 5px;
  margin-right: 1vw;
`

export const PreviewDivNav = styled.div`
  width: 30%;
`

export const ResultNav = styled.p`
  margin-left: auto;
  color: rgb(79, 78, 78);
`
