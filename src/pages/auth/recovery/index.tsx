import { useState } from 'react';

import TextField from '../../../components/forms/text-field';

export default function RecoveryPage(){
  const [email, setEmail] = useState('');

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