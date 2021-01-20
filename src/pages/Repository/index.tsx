import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repositoryName: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://lh3.googleusercontent.com/proxy/HtJV-fPbmLJQa85yIDC7G0XmP1FnWXMLhVZNq93i4eBXxV6DQFINJ2JqpgRpgu-n89ESbVyTBB1-9amHw9ekYDil7bhTVN4G3Vh2SL_no5K95ktdtQjGHJfKNpaqOb0mHr9JOD1MYRYZ11QElSroc4JFIea36_Wo" alt="Tananam avatar" />
          <div>
            <strong>Vitorrubim/unform</strong>
            <p>tantantnatnantantoasmndomaso</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>1800</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>1800</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="#">
          <div>
            <strong>Teste nome qualquer</strong>
            <p>
              descrição qualquer, lorem ipsum loret it
            </p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
