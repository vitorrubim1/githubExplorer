import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;

    transition: all 200ms;

    &:hover {
      color: #3a3a3a;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
