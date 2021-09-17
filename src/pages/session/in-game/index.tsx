import { useContext, useEffect } from "react";

import LoaderContext from "../../../context/loader";

import DefaultBtn from '../../../components/buttons/default-btn';

export default function InGamePage(props: any){
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  return (
    <div className="container">
      <DefaultBtn 
        label="Voltar"
        onClick={() => props.history.push({pathname: '/'})}
      />
      <h1>In Game</h1>
    </div>
  );
}