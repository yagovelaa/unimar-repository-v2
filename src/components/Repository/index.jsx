import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import style from "./repository.module.css";

export function Repository({ repository, onDeleteRepository }) {
  const lastUpdateFormatted = format(
    repository.updated_at,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const lastUpdateRelativeToNow = formatDistanceToNow(repository.updated_at, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteRepository() {
    onDeleteRepository(repository.id);
  }

  return (
    <div className={style.repository}>
      <div className={style.repositoryDescription}>
        <h4>{repository.name}</h4>

        <time
          title={lastUpdateFormatted}
          dateTime={repository.updated_at}
        >
          {lastUpdateRelativeToNow}
        </time>
      </div>

      <button onClick={handleDeleteRepository}>deletar</button>
    </div>
  );
}
