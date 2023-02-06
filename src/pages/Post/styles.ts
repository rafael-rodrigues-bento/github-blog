import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4.6rem auto;
  max-width: 86rem;
`

export const PostContent = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  font-family: 'Nunito';
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;

  p {
    color: ${({ theme }) => theme["base-text"]};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  a {
    color: ${({ theme }) => theme.blue};
  }
  code {
    line-height: 1.6;
    margin: 2.5rem 0;
    background: ${({ theme }) => theme["base-post"]};
    padding: 1rem;
    border-radius: 6px;
    display: block;
  }

  img {
    max-width: 100%;
  }
`

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme["base-profile"]};
  padding: 3.2rem;
  border-radius: 10px;
  margin-top: 4.6rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.blue};
      text-decoration: none;
      border-bottom: 1px solid transparent;
      margin-bottom: 2rem;
      text-transform: uppercase;
      transition: border 0.1s;

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${({ theme }) => theme.blue};
      }
    }
  }

  >div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > h2 {
      font-size: 2.4rem;
      line-height: 130%;
      color: ${({ theme }) => theme["base-title"]};
    }

    > div ul {
      display: flex;
      list-style: none;
      gap: 3.2rem;
      font-size: 1.6rem;
      line-height: 160%;
      color: ${({ theme }) => theme["base-span"]};

      > li {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
    }
  }
`