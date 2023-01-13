import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 93%;
  position: absolute;
  bottom: 0;
  display: flex;
`

export const ContainerRound = styled.nav`
  width: 20vw;
  height: 93vh;
  background-color: white;
  border-right: 1px solid rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Round = styled.p`
  width: 100%;
  height: 5vh;
  background-color: white;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.18); */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: black;
`

export const ContainerTeams = styled.div`
  width: 100%;
  height: 95%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }
`

export const Confrontation = styled.div`
  width: 100%;
  height: 10vh;
  border: 1px solid #00000014;
  border-radius: 5px;
  margin: 2vh 0px;
  display: flex;
  justify-content: space-between;
`

export const Teams = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

export const ImgTeams = styled.img`
  width: 25px;
  margin-left: 5px;
  margin-right: 1vw;
`

export const Results = styled.p`
  margin-left: auto;
  color: rgb(79, 78, 78);
`
