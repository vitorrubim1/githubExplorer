import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

import { Title, Form, Repositories, Error } from "./styles";

interface Repository {
  //formato dos dados da api
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return []; //que seria o valor inicial do estado
    }
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError("Digite o autor/nome do repositório");
      return; //pra evitar que o código continue executando
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository("");
      setInputError("");
    } catch (error) {
      setInputError("Erro na busca por esse repositório");
    }
  }

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepository}
          onChange={(event) => setNewRepository(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error> {inputError} </Error>}

      <Repositories>
        {repositories.map((repositories, index) => (
          <a href="#">
            <img
              key={index}
              src={repositories.owner.avatar_url}
              alt="Avatar of owner repository"
            />
            <div>
              <strong>{repositories.owner.login}</strong>
              <p>
                {repositories.description
                  ? repositories.description
                  : "Não há descrição."}
              </p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
