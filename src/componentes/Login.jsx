import { useState } from 'react';
import "./Login.css";
import Onibus_imagem from "../assets/onibus.jpg";
import Ponto_imagem from "../assets/ponto.jpg";

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSenha, setLoginSenha] = useState('');
  const [cadastroNome, setCadastroNome] = useState('');
  const [cadastroEmail, setCadastroEmail] = useState('');
  const [cadastroSenha, setCadastroSenha] = useState('');

  // Função para validar o login
  const validateLogin = (e) => {
    e.preventDefault();
    const email = loginEmail;
    const senha = loginSenha;

    // Verificar se o email contém "@" usando regex
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Por favor, digite um email válido.');
      return;
    }

    // Verificar o comprimento da senha
    if (senha.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Obter os dados do usuário armazenados no sessionStorage
    const storedUser = sessionStorage.getItem(email);

    // Verificar se o usuário existe no sessionStorage e a senha está correta
    if (storedUser && JSON.parse(storedUser).senha === senha) {
      alert('Login bem-sucedido');
    } else {
      alert('Credenciais de login inválidas');
    }
  };

  // Função para validar o cadastro
  const validateCadastro = (e) => {
    e.preventDefault();
    const email = cadastroEmail;
    const senha = cadastroSenha;

    // Verificar se o email contém "@" usando regex
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Por favor, digite um email válido.');
      return;
    }

    // Verificar o comprimento da senha
    if (senha.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Verificar se o usuário já existe no sessionStorage
    if (sessionStorage.getItem(email)) {
      alert('Usuário já existe. Escolha um nome de usuário diferente.');
    } else {
      // Armazenar o novo usuário no sessionStorage
      sessionStorage.setItem(email, JSON.stringify({ senha }));
      alert('Cadastro realizado com sucesso!');
    }
  };


  return (
    <main className="main-login">
      <section className="section-login">
        <div className="container">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img id="imagem1" src={Ponto_imagem} alt="imagem do ponto" />
            </div>
            <div className="back">
              <img id="imagem2" src={Onibus_imagem} alt="Imagem Cadastro" />
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form onSubmit={validateLogin}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Digite seu email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={loginSenha}
                        onChange={(e) => setLoginSenha(e.target.value)}
                        required
                      />
                    </div>
                    <div className="text">
                      <a href="#">Esqueceu a senha?</a>
                    </div>
                    <div className="button input-box">
                    <input type="submit" value="Enviar" />
                    </div>
                    <div className="text sign-up-text">
                      Não tem uma conta?{' '}
                      <label htmlFor="flip">Inscreva-se agora</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Inscrever-se</div>
                <form onSubmit={validateCadastro}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={cadastroNome}
                        onChange={(e) => setCadastroNome(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Digite seu email"
                        value={cadastroEmail}
                        onChange={(e) => setCadastroEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={cadastroSenha}
                        onChange={(e) => setCadastroSenha(e.target.value)}
                        required
                      />
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Enviar" />
                    </div>
                    <div className="text sign-up-text">
                      Já tem uma conta?{' '}
                      <label htmlFor="flip">Conecte-se agora</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
