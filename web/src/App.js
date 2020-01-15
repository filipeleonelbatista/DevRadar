import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" require />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" require />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" require />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" require />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/20867392?v=4" alt=""/>
            <div className="user-info">
              <strong>Filipe Batista</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Sempre buscando utilizar a tecnologia para dar qualidade de vida</p>
          <a href="https://github.com/modernfunkboss">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/20867392?v=4" alt=""/>
            <div className="user-info">
              <strong>Filipe Batista</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Sempre buscando utilizar a tecnologia para dar qualidade de vida</p>
          <a href="https://github.com/modernfunkboss">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/20867392?v=4" alt=""/>
            <div className="user-info">
              <strong>Filipe Batista</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Sempre buscando utilizar a tecnologia para dar qualidade de vida</p>
          <a href="https://github.com/modernfunkboss">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/20867392?v=4" alt=""/>
            <div className="user-info">
              <strong>Filipe Batista</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Sempre buscando utilizar a tecnologia para dar qualidade de vida</p>
          <a href="https://github.com/modernfunkboss">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
