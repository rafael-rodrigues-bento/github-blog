import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;

    > h3 {
      font-size: 18px;
      line-height: 160%;
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    > span {
      font-size: 1.4rem;
      line-height: 160%;
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  > input {
    background-color: ${({ theme }) => theme["base-input"]};
    border: 1px solid ${({ theme }) => theme["base-border"]};
    padding: 1.2rem 1.6rem;
    border-radius: 8px;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-label"]};
  }
`