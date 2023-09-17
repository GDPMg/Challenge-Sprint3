import { } from 'react'
import "./Footer.css"
import {NavLink} from 'react-router-dom'

function Footer() {
  
  return (
    <>
       <footer>
        <div className="footer-content">
            <ul>
                <li className="nav-item"><a className="nav-link"><NavLink to="Sobre">Sobre</NavLink></a></li>
                <li className="nav-item"><a className="nav-link"><NavLink to="Contato">Contato</NavLink></a></li>
                <li className="nav-item"><a className="nav-link"><NavLink to="Lista">Lista</NavLink></a></li>
            </ul>
        </div>
        <p>Termos de Uso - Política de Privacidade</p>
        <p id="direitos_footer">@2023 -Todos os direitos reservados</p>
       </footer>
    </>
  )
}

export default Footer