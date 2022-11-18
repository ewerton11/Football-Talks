import styled from "styled-components"

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: auto;
`

export const ArrowLeftStyle = styled.img`
  width: 50px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const ArrowRightStyle = styled.img`
  width: 50px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const StyleDivLeft = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  overflow: auto;
  border: 1px solid black;
  position: absolute;
  left: 10%;
`

export const StyleDiv = styled.div`
  z-index: 2;
  width: 500px;
  height: 300px;
  display: flex;
  border: 1px solid black;
  overflow: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`

export const StyleDivRigth = styled.div`
  width: 500px;
  height: 250px;
  border: 1px solid black;
  display: flex;
  position: absolute;
  right: 10%;
`

/* ${div} {
  position: absolute;
} */
/* > ${div} {
  position: absolute;
} */
// div: nth - child(n) {
//   position: absolute;
// }
