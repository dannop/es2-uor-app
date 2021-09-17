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
    <div className="container">
      <h1>Home</h1>
      <DefaultBtn 
        label="Sair"
        onClick={() => StorageService.logout(props.history)}
      />
    </div>
  );
}