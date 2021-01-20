import styled from "styled-components";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;

  max-width: 500px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;

  max-width: 700px;

  display: flex;

  input {
    flex: 1; // para que o input ocupe todo espaço possível, flexivelmente

    height: 70px;
    padding: 0 24px;
    border: ${(props) => (props.hasError ? "2px solid #c53030" : "0")};
    border-radius: 5px 0 0 5px;

    color: #3a3a3a;
    font-size: 20px;

    ::placeholder {
      color: #7a7a7a;
      font-size: 20px;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #3a3a3a;

    border-radius: 0 5px 5px 0;
    border: 0;

    color: #fff;
    font-weight: bold;
    font-size: 20px;

    transition: all 200ms;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;

  max-width: 700px;

  a {
    background: #fff;

    border-radius: 5px;

    width: 100%;
    padding: 24px;

    display: flex; //pq por padrão a tag <a /> vem com display inline
    align-items: center;

    transition: all 200ms;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(15px);
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }

  svg {
    margin-left: auto;
    color: #a8a8b3;
  }
`;

export const Error = styled.span`
  display: block;

  color: #c53030;
  margin-top: 8px;
`;
