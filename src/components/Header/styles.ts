import styled from "styled-components";
import backgroundImg from "../../assets/bg-header.svg"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6.4rem;

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 29.6rem;
    inset: 0;
    background: url(${backgroundImg}) ;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
  }
`

