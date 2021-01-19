import React from 'react';
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img src="https://avatars0.githubusercontent.com/u/48107882?s=400&u=2bc9e625b73eaa4fa532d3ac1c9c14fecd4af5f1&v=4" alt="Avatar of owner repository"/>
        
          <div>
            <strong>vitor/uiCloneInterfaceNetflix</strong>
            <p>lorem ipsum ador loret it</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="#">
          <img src="https://avatars0.githubusercontent.com/u/48107882?s=400&u=2bc9e625b73eaa4fa532d3ac1c9c14fecd4af5f1&v=4" alt="Avatar of owner repository"/>
        
          <div>
            <strong>vitor/uiCloneInterfaceNetflix</strong>
            <p>lorem ipsum ador loret it</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="#">
          <img src="https://avatars0.githubusercontent.com/u/48107882?s=400&u=2bc9e625b73eaa4fa532d3ac1c9c14fecd4af5f1&v=4" alt="Avatar of owner repository"/>
        
          <div>
            <strong>vitor/uiCloneInterfaceNetflix</strong>
            <p>lorem ipsum ador loret it</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;