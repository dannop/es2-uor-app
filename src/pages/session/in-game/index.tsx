import { useContext, useEffect } from "react";

import './style.scss';

import LoaderContext from "../../../context/loader";

import RoundBtn from "../../../components/buttons/round-btn";
import GameMap from "../../../components/game-map";

export default function InGamePage(props: any){
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  return (
    <section id="select-players" className="d-flex">
      <div className="container-fluid">
        <div className="row players-row">
          <div className="col-md-1">
            <RoundBtn 
              icon={<i className="fas fa-angle-double-left"></i>}
              label="Voltar"
              onClick={() => props.history.push({pathname: '/'})}
            />
          </div>
          <GameMap 
          
          />		
        </div>
      </div>
    </section>
  );
}