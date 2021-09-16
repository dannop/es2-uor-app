import { useState } from 'react';

import TextField from '../../../components/forms/text-field';

export default function SignUpPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show_password, setShowPassword] = useState(false);

  return (
    <div>
      <TextField 
        label={'E-mail'}
        name={'E-mail'}
        value={email}
        onChange={setEmail}
        placeholder={'Digite seu e-mail'}
      />
    </div>
  );
}