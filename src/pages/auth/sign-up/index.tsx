import { useContext, useState } from 'react';

import { StorageService, ApiRoutesService } from '../../../services';

import LoaderContext from '../../../context/loader';

import TextField from '../../../components/forms/text-field';
import DefaultBtn from '../../../components/buttons/default-btn';


export default function SignUpPage(props: any){
  const loaderContext = useContext(LoaderContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function register() {
    loaderContext?.setLoading(true);
    const body = { email, password };
    
    var resp = await ApiRoutesService.AuthApi.session.register(JSON.stringify(body));
    if (resp != null) {
      resp = await ApiRoutesService.AuthApi.session.login(JSON.stringify(body));
      if (resp != null) {
        StorageService.login(resp.token, resp.token);
        props.history.push({pathname: '/home'});
        return;
      };
    }
    
    loaderContext?.setLoading(false);
  }

  return (
    <div className="container">
      <DefaultBtn 
        label="Voltar"
        onClick={() => props.history.push({pathname: '/sign-in'})}
      />
      <TextField 
        label={'E-mail'}
        name={'E-mail'}
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        placeholder={'Digite seu e-mail'}
      />
      <TextField 
        label={'Senha'}
        name={'Senha'}
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
        placeholder={'Digite sua senha'}
      />
      <DefaultBtn 
        label="Cadastre-se"
        onClick={() => register()}
      />
    </div>
  );
}