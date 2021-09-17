import { memo } from 'react';

function TransparentBtn({ label, onClick }: any){
  return (
    <button onClick={onClick}>
      <p>{label}</p>
    </button>
  )
}

export default memo(TransparentBtn);