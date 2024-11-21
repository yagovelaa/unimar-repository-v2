import { CircleNotch, PaperPlaneRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { Repository } from "../../components/Repository";
import styles from "./home.module.css";

export function Home() {
  const [repository, setRepository] = useState([]);
  const [user, setUser] = useState({});
  const [newRepository, setNewRepository] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/yagovelaa/repos")
      .then((response) => response.json())
      .then((data) => setRepository(data));

    fetch("https://api.github.com/users/yagovelaa")
      .then((response) => response.json())
      .then((data) => setUser(data));

    setLoading(false);
  }, []);

  function handleCreateNewRepository(event) {
    event.preventDefault();

    const data = {
      id: repository.length + 1,
      name: newRepository,
      updated_at: new Date(),
      url: `https://github.com/yagovelaa/${newRepository}`,
    };

    setRepository([...repository, data]);
    setNewRepository("");
  }

  function handleDeleteRepository(id) {
    const repositoryWithoutDeletedOne = repository.filter(
      (repository) => repository.id !== id
    );

    setRepository(repositoryWithoutDeletedOne);
  }

  function handleNewValueRepository(event) {
    setNewRepository(event.target.value);
  }

  const hasValueToCreateRepository = newRepository.length <= 0;

  if (loading) {
    return <CircleNotch size={32} className={styles.loading} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.infoUser}>
            <img src={user.avatar_url} alt="" />

            <div className={styles.infoDetails}>
              <h4 className={styles.nameUser}>{user.name}</h4>
              <span className={styles.tag}>{user.login}</span>
            </div>
          </div>

          <a href={user.html_url} target="_blank">
            IR PARA PERFIL
          </a>
        </div>

        <div className={styles.cardBody}>
          <p>
            {user.bio === null ? "Esse usuário não tem biografia" : user.bio}
          </p>
        </div>

        <form
          onSubmit={(event) => handleCreateNewRepository(event)}
          className={styles.cardFooter}
        >
          <input
            onChange={(event) => handleNewValueRepository(event)}
            type="text"
            value={newRepository}
            placeholder="Novo repositório"
          />

          <button type="submit" disabled={hasValueToCreateRepository}>
            <PaperPlaneRight size={24} />
          </button>
        </form>
      </div>

      <div className={styles.repositories}>
        {repository.map((repository) => (
          <Repository
            key={repository.id}
            repository={repository}
            onDeleteRepository={handleDeleteRepository}
          />
        ))}
      </div>
    </div>
  );
}
