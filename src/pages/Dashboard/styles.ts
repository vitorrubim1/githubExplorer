import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;

  max-width: 500px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;

  max-width: 700px;

  display: flex;

  input {
    flex: 1; // para que o input ocupe todo espaço possível, flexivelmente
    
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px; 

    color: #3a3a3a;
    font-size: 20px;

    ::placeholder{ 
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

    color: #FFF;
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
    background: #FFF;
    
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
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }
  }

  svg {
    margin-left: auto;
    color: #A8A8B3;
  }
`;
