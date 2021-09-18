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
    <section className="default-section ingame-section">
      <div className="container-fluid">
        <div className="action-container">
          <RoundBtn 
            icon={<i className="fas fa-angle-double-left"></i>}
            label="Voltar"
            onClick={() => props.history.push({pathname: '/'})}
          />
        </div>
        <GameMap 

        />		
      </div>
    </section>
  );
}