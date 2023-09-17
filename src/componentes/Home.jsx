import {  } from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css";
import Logo_header from '../assets/logo.ico'


function Home() {
  
  return (
    <>
   <main className="main-index">
        <h3>Procure o ponto de ônibus mais perto de você!</h3>

        <div className="mapa"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14628.48545458755!2d-46.6523865!3d-23.5640843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1694623396147!5m2!1spt-BR!2sbr" style={{width:"600px", height:"450px"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" id="iframe"></iframe>
        </div>

        <section>
            <div className="inputs">
              <input type="text" placeholder="Digite aqui o número do seu ônibus" id="pesquisa" />
              <a><NavLink to="/Lista"><button id="botao">Pesquisar</button></NavLink></a>
            </div>
          </section>
    </main>
    
       <div className="container-card">
            <aside className="card">
                <div className="icon">
                    <img src={Logo_header} alt="TechForAll"></img>
                </div>
                <h3>Sobre</h3>
                <span>Clique em SAIBA MAIS para saber mais sobre a empresa TechForAll.</span>
                <button><a><NavLink to="/Sobre">Saiba Mais</NavLink></a></button>
            </aside> 
            
            <aside className="card">
                <div className="icon">
                    <img src={Logo_header} alt="TechForAll"></img>
                </div>
                <h3>Contato</h3>
                <span>Clique em SAIBA MAIS para entrar em contato a empresa TechForAll.</span>
                <button><a><NavLink to="/Contato">Saiba Mais</NavLink></a></button>
            </aside>
    
            <aside className="card">
                <div className="icon">
                    <img src={Logo_header} alt="TechForAll"></img>
                </div>
                <h3>Lista</h3>
                <span>Clique em SAIBA MAIS para ter acesso a lista de ônibus disponíveis.</span>
                <button><a><NavLink to="/Lista">Saiba Mais</NavLink></a></button>
            </aside>
        </div>
    </>
  )
}

export default Home