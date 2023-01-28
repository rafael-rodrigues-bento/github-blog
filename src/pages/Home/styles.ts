import styled from "styled-components"

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4.6rem auto;
  max-width: 86rem;
  gap: 4.8rem;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
`