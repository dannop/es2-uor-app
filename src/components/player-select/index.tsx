import { memo } from 'react';

function PlayerSelect({ color, kind, name, setName }: any){
  return (
    <div className="owl-carousel owl-theme player" id={color}>
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
  )
}

export default memo(PlayerSelect);