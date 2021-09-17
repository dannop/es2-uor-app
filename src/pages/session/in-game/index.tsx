import { useContext, useEffect } from "react";

import LoaderContext from "../../../context/loader";

import DefaultBtn from '../../../components/buttons/default-btn';

import './style.scss';

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
          					
					<path data-name="Africa" id="africa" className="cls-1 regiao" d="M249.69,360.8c-2.3-1.39-1.55-2.87-.48-5.1s-.81-2-.2-4.28,5.66-5.11,8.67-6,2-2.66,4.6-4.06,13.35-3.08,20.17-3.42,4.47,2.29,6.78,3.5a37,37,0,0,0,9.34,2.58c.89-.05-.47-1.24,1.67-1.86s8.64,1.83,12.49,1.71,8.1,5.32,10.08,7.5,12.1,11.42,14.85,11,7.75-3.4,8.55.12-13.45,11.34-14.94,14.27,2.67,10.69-2.43,12.81-2.16,4.06-2.71,5.62-3.66.63-6.17,3.66.81,2.08-4.28,5.86-7.47,3.47-13.37,4-13.12-16.46-14.43-19.46,2.84-3,2.87-7.92-6.4-6.53-5.55-9.56-3.58-3.54-5-4.06-.4-2.36-4.36-1.7-8.08.54-13.32.76-4.24-.35-7.87-2.07A36.32,36.32,0,0,0,249.69,360.8Zm89.12,31.38c.17,1-2.62,1.89-1.79,3.24s-.29,2.11,2.14,2.83,1.83-.1,3.1-.13,4.25-7.91,4.86-9a3.54,3.54,0,0,0-.2-3.9c-1-1.25-.93-1-1.53-.9s-.92,2-2.49,2.79-3.51.69-4.45,1.69S338.65,391.39,338.81,392.18Z" transform="translate(-83.87 -274.74)"/>
        </div>
      </div>
    </section>
  );
}