import { useContext, useEffect } from "react";

import { StorageService } from "../../../services";

import LoaderContext from "../../../context/loader";

import DefaultBtn from '../../../components/buttons/default-btn';

export default function HomePage(props: any){
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  return (
    <section id="main-menu" className="d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-1 align-self-center">
            <figure className="logo">
              <img src={require("../../../assets/images/logo.png")} alt="Uór is fantastic"></img>
            </figure>
            <a href="/in-game">
              <div className="rectangular-btn btn">Iniciar Jogo</div>
            </a>
          </div>
          <div className="col-md-1">
            <DefaultBtn 
              label="Sair"
              onClick={() => StorageService.logout(props.history)}
            />
            <div className="circle-btn d-flex rules"> 
              <i className="fas fa-gavel align-self-center"></i> 
            </div>
            <div className="circle-btn group"></div>
          </div>
        </div>
      </div>
    </section>
  );
}