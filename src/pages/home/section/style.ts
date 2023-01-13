import styled from 'styled-components'
import soccer from '../../../assets/soccer.jpg'

export const Section = styled.section`
  width: 80%;
  height: 100%;
  background-image: url(${soccer});
  background-size: cover;
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerVideos = styled.div`
  width: 80%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: auto;

  & div:nth-child(2) {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    & div {
      min-width: 100% !important;
      min-height: 100% !important;
    }
  }

  & div:nth-child(3) {
    z-index: 2;
    width: 500px;
    height: 398px;
    border: 2px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & div {
      min-width: 100% !important;
      min-height: 100% !important;
    }
  }

  & div:nth-child(4) {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    & div {
      min-width: 100% !important;
      min-height: 100% !important;
    }
  }
`

export const Div = styled.div`
  width: 550px;
  height: 400px;
`

export const h1Loading = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArrowLeftStyle = styled.img`
  width: 50px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    background-color: #c5c5c5;
  }
`

export const ArrowRightStyle = styled.img`
  width: 50px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    background-color: #c5c5c5;
  }
`
