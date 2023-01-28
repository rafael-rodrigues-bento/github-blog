import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 4rem 3.2rem;
  max-width: 86rem;
  height: 21.2rem;
  border-radius: 10px;

  background: ${({ theme }) => theme["base-profile"]};

  img {
    height: 14.8rem;
    width: 14.8rem;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  width: 100%;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    > h2 {
      font-size: 2.4rem;
      line-height: 130%;
      color: ${({ theme }) => theme["base-title"]};
    }

    > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.blue};
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 160%;

      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.blue};
      }
    }
  }

  div:nth-child(2) {
    margin-bottom: 2.4rem;
       p {
        line-height: 160%;
        font-size: 1.5rem;
        color: ${({ theme }) => theme["base-text"]};
      }
    }

  div:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      color: ${({ theme }) => theme["base-subtitle"]};
      text-decoration: none;
      font-size: 1.3rem;
      line-height: 160%;
    }
  }
    
`