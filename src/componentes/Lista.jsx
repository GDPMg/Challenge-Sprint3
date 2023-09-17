import { useState } from 'react';
import './Lista.css';


localStorage.setItem('309', 'Faz parte da linha 675N e tem como origem o Term. Cachoeirinha e destino o Term. Princ. Isabel');
localStorage.setItem('105', 'Faz parte da linha 107T e tem como origem o Metrô Tucuruvi e destino o Term. Bandeira');
localStorage.setItem('56', 'Faz parte da linha 5109 e tem como origem o Term. Capelinha e destino o Term. Santo Amaro');
localStorage.setItem('973', 'Faz parte da linha 917M e tem como origem o Term. Varginha e destino o Metrô Santa Cruz');
localStorage.setItem('256', 'Faz parte da linha 376M e tem como origem o Metrô Tucuruvi e destino o Term.Pinheiros');
localStorage.setItem('861', 'Faz parte da linha 8015 e tem como origem o Term. Campo Limpo e destino o Term. São Judas');
localStorage.setItem('465', 'Faz parte da linha 675I e tem como origem o Term. Pirituba e destino o Term. Princ. Isabel');
localStorage.setItem('162', 'Faz parte da linha 8700 e tem como origem o Term. Varginha e destino o Metrô Corinthians - Itaquera');


function Lista() {
  const [informacoesDoOnibus, setInformacoesDoOnibus] = useState('');

  // Function to handle bus search
  const procura_onibus = () => {
    // Obter o número do ônibus digitado pelo usuário
    const numeroOnibus = document.getElementById('pesquisa').value;

    // Obtendo informações do ônibus do localStorage
    const infoDoOnibus = localStorage.getItem(numeroOnibus);

    // Atualizar o estado com as informações do ônibus
    setInformacoesDoOnibus(infoDoOnibus || 'Nenhuma informação disponível para este ônibus.');
  };

  return (
    <>
    
      <section>
        <div className="cabecalho">
          <h1>Encontre aqui o ônibus ideal para você!</h1>
        </div>
      </section>

      <div className="containerOnibus">
        <main className="mainOnibus">
          <section>
            <div className="lista">
              <details open id="detailsBus">
                <summary id="summaryBus">Cheque aqui o número dos ônibus disponíveis e veja mais detalhes sobre eles</summary>
                <ul id="ulBus">
                  <li id="liBus">N°: 309</li>
                  <li id="liBus">N°: 105</li>
                  <li id="liBus">N°: 56</li>
                  <li id="liBus">N°: 973</li>
                  <li id="liBus">N°: 256</li>
                  <li id="liBus">N°: 861</li>
                  <li id="liBus">N°: 465</li>
                  <li id="liBus">N°: 162</li>
                </ul>
              </details>
            </div>
          </section>
          <section>
            <div className="inputs">
              <input type="text" placeholder="Digite aqui o número do seu ônibus" id="pesquisa" />
              <button id="botao" onClick={procura_onibus}>Pesquisar</button>
            </div>
          </section>

          <section>
            <div id="resultado">
              {informacoesDoOnibus}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Lista;
