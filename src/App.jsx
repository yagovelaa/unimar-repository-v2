import { PaperPlaneRight } from "@phosphor-icons/react";
import "./app.css";

export function App() {
  return (
    <main>
      <header>
        <h1>Unimar Repositórios</h1>
      </header>

      <div className="container">
        <div className="card">
          <div className="card-header">
            <img
              src="https://avatars.githubusercontent.com/u/133478879?v=4"
              alt=""
            />

            <div>
              <h4 className="name-user">Yago Vela</h4>
              <span className="tag">@yagovelaa</span>
            </div>
          </div>

          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              animi, totam perferendis provident accusantium eveniet porro.
              Tenetur ad ab delectus distinctio magnam tempore alias aut vitae
              possimus adipisci. Natus, in!
            </p>
          </div>

          <div className="card-footer">
            <input type="text" placeholder="Novo repositório" />

            <button>
              <PaperPlaneRight size={24} />
            </button>
          </div>
        </div>

        <div className="repositories">
          <div className="repository">
            <div className="repository-description">
              <h4>Projeto React</h4>
              <span>updated last week</span>
            </div>

            <div className="repository-actions">
              <button>deletar</button>
            </div>
          </div>

          <div className="repository">
            <div className="repository-description">
              <h4>Projeto React</h4>
              <span>updated last week</span>
            </div>

            <div className="repository-actions">
              <button>deletar</button>
            </div>
          </div>

          <div className="repository">
            <div className="repository-description">
              <h4>Projeto React</h4>
              <span>updated last week</span>
            </div>

            <div className="repository-actions">
              <button>deletar</button>
            </div>
          </div>

          <div className="repository">
            <div className="repository-description">
              <h4>Projeto React</h4>
              <span>updated last week</span>
            </div>

            <div className="repository-actions">
              <button>deletar</button>
            </div>
          </div>

          <div className="repository">
            <div className="repository-description">
              <h4>Projeto React</h4>
              <span>updated last week</span>
            </div>

            <div className="repository-actions">
              <button>deletar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
