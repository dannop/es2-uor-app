import { useContext, useEffect } from "react";

import LoaderContext from "../../../context/loader";

import DefaultBtn from '../../../components/buttons/default-btn';

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
            <DefaultBtn 
              label="Voltar"
              onClick={() => props.history.push({pathname: '/'})}
            />
            <div className="circle-btn d-flex back"> 
              <i className="fas fa-angle-double-left"></i> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}