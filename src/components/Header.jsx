import styled from "styled-components"
import headerLogo from "../assets/headerlogo.png"

export default function Header() {
  return (
    <HeaderLogo>
      <img src={headerLogo} alt="header logo" />
      <span>Cineflix</span>
    </HeaderLogo>
  )
}

const HeaderLogo = styled.div`
  background-color: #EE897F;
  width: 100%;
  height: 67px;
  position: fixed;
  top: 0px;
  left: 0px;
  font-family: "Raleway", sans-serif;
  color: #FADBC5;
  font-size: 34px;
  font-weight: 600;
  line-height: 39.92px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    margin-bottom: 9px;
  }
`