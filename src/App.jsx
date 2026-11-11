import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="logo" href="#inicio">
            Otávio<span>.</span>
          </a>

          <div className="menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#stacks">Stacks</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="inicio" className="hero">
          <div className="container">
            <p className="destaque">Olá, eu sou</p>

            <h1>Otávio Ramos Ribeiro</h1>

            <h2>Sistemas de Informação</h2>

            <p className="descricao">
              Estudante de Sistemas de Informação com interesse em
              desenvolvimento de sistemas, aplicações web e backend.
            </p>

            <div className="botoes">
              <a href="#projetos" className="btn principal">
                Ver projetos
              </a>

              <a
                href="https://github.com/otavio1123"
                target="_blank"
                className="btn secundario"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao branco">
          <div className="container">
            <p className="titulo-menor">SOBRE</p>
            <h2>Sobre mim</h2>

            <p className="texto">
              Sou estudante de Sistemas de Informação e venho desenvolvendo
              projetos utilizando tecnologias de frontend, backend e banco de
              dados. Tenho interesse em desenvolvimento web e busco evoluir
              profissionalmente na área de tecnologia.
            </p>
          </div>
        </section>

        <section id="stacks" className="secao">
          <div className="container">
            <p className="titulo-menor">TECNOLOGIAS</p>
            <h2>Minhas stacks</h2>

            <div className="stacks">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>REST API</span>
            </div>
          </div>
        </section>

        <section id="projetos" className="secao branco">
          <div className="container">
            <p className="titulo-menor">PORTFÓLIO</p>
            <h2>Projetos</h2>

            <div className="projetos">
              <div className="card">
                <h3>Organizador Acadêmico</h3>
                <p>
                  Sistema para organização de disciplinas, atividades, notas,
                  frequência e informações acadêmicas.
                </p>

                <a
                  href="https://github.com/otavio1123/organizador-academico"
                  target="_blank"
                >
                  Ver no GitHub
                </a>
              </div>

              <div className="card">
                <h3>Gabinete Digital</h3>
                <p>
                  Sistema web para gerenciamento de munícipes, atendimentos,
                  demandas, documentos e agenda.
                </p>
              </div>

              <div className="card">
                <h3>Login Seguro</h3>
                <p>
                  Aplicação com Spring Security, autenticação, controle de
                  acesso e diferentes perfis de usuário.
                </p>

                <a
                  href="https://github.com/otavio1123/login-seguro"
                  target="_blank"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="secao">
          <div className="container">
            <p className="titulo-menor">CONTATO</p>
            <h2>Vamos conversar</h2>

            <div className="contatos">
              <a href="https://github.com/otavio1123" target="_blank">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ot%C3%A1vio-ramos-2512a4341/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Otávio Ramos Ribeiro</p>
      </footer>
    </>
  )
}

export default App