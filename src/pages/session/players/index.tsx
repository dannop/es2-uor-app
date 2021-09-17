import { useContext, useEffect } from "react";

import LoaderContext from "../../../context/loader";

import DefaultBtn from '../../../components/buttons/default-btn';

export default function PlayersPage(props: any){
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  const playerContainer = () => (
    <div className="owl-carousel owl-theme player" id="blue">
      <div className="item d-flex justify-content-center align-items-center">
        <i className="fas fa-user"></i>
        <div className="infos">
          <h3>JOGADOR</h3>
          <input type="text" name="nome" placeholder="Digite seu nome" />
        </div>
      </div>

      <div className="item d-flex justify-content-center align-items-center">
        <i className="fas fa-robot"></i>
        <div className="infos">
          <h3>CPU</h3>
          <input type="text" name="nomeCPU" placeholder="Digite seu cpu" />
        </div>
      </div>

      <div className="item d-flex justify-content-center align-items-center">
          <i className="fas fa-ban"></i>
          <div className="infos">
            <h3>DESATIVADO</h3>
          </div>
      </div>
    </div>
  );

  return (
    <section id="select-players" className="d-flex">
      <div className="container-fluid">
        <div className="row players-row">
          <div className="col-md-1">
            <DefaultBtn 
              label="Voltar"
              onClick={() => props.history.push({pathname: '/'})}
            />
            <div className="circle-btn d-flex back"> 
              <i className="fas fa-angle-double-left"></i> 
            </div>
          </div>
          <div className="col-md-10 align-self-center">
            <h1>SELECIONE OS JOGADORES PARA COMEÇAR A PARTIDA</h1>

            <div className="row">
              <div className="col-md-6">
                {playerContainer()}
              </div>
              <div className="col-md-6">
                {playerContainer()}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {playerContainer()}
              </div>
              <div className="col-md-6">
                {playerContainer()}
              </div>
            </div>
            <a href="/in-game">
              <div className="rectangular-btn btn" id="btn-start">Começar</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}