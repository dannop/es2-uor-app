import { memo } from 'react';

function DefaultBtn({ label, onClick }: any){
  return (
    <button onClick={onClick}>
      <p>{label}</p>
    </button>
  )
}

export default memo(DefaultBtn);