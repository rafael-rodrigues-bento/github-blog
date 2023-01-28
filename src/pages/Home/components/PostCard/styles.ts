import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  border-radius: 10px;
  max-width: 41rem;
  height: 26rem;
  border: 2px solid transparent;

  background: ${({ theme }) => theme["base-post"]};
  transition: border 0.2s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme["base-label"]};
  }

  > div:nth-child(1) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2rem;

    > h3 {
      font-size: 2rem;
      line-height: 160%;
      color: ${({ theme }) => theme["base-title"]};
      max-width: 75%;
    }

    > span {
      font-size: 1.4rem;
      line-height: 200%;
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  > p {
      font-size: 1.6rem;
      line-height: 160%;
      color: ${({ theme }) => theme["base-text"]};
    }
`