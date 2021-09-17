import { useState } from 'react';

import TextField from '../../../components/forms/text-field';

import DefaultBtn from '../../../components/buttons/default-btn';

export default function SignUpPage(props: any){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function register() {
    
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
        onChange={setEmail}
        placeholder={'Digite seu e-mail'}
      />
      <TextField 
        label={'Senha'}
        name={'Senha'}
        value={password}
        onChange={setPassword}
        placeholder={'Digite sua senha'}
      />
      <DefaultBtn 
        label="Cadastre-se"
        onClick={() => register()}
      />
    </div>
  );
}