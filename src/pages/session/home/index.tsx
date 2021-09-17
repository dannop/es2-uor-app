import { useContext, useEffect, useState } from "react";

import { StorageService } from "../../../services";

import LoaderContext from "../../../context/loader";

import DefaultBtn from '../../../components/buttons/default-btn';
import RoundBtn from "../../../components/buttons/round-btn";
import DefaultModal from "../../../components/modals/default-modal";

import logoImg from '../../../assets/images/logo.png';

export default function HomePage(props: any){
  const loaderContext = useContext(LoaderContext);

  const [rules_modal, setRulesModal] = useState(false);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  return (
    <section id="main-menu" className="d-flex">
      <DefaultModal 
        visible={rules_modal}
        setVisible={setRulesModal}
        title={"Regras"}
        content={"Lorem ipsum"}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-1 align-self-center">
            <figure className="logo">
              <img src={logoImg} alt="Uór is fantastic"></img>
            </figure>
            <DefaultBtn 
              label="Iniciar Jogo"
              onClick={() => props.history.push({pathname: '/players'})}
            />
          </div>
          <div className="col-md-1">
            <RoundBtn 
              icon={<i className="fas fa-angle-double-left"></i>}
              label="Sair"
              onClick={() => StorageService.logout(props.history)}
            />
            <RoundBtn 
              icon={<i className="fas fa-gavel align-self-center"></i>}
              label="Regras"
              onClick={() => setRulesModal(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}