import styled from 'styled-components'

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

export const UlNav = styled.ul`
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
