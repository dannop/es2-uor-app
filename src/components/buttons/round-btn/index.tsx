import { memo } from 'react';

import './style.scss'

function RoundtBtn({ icon, label, onClick }: any){
  return (
    <div>
      <button className="roundBtn circle-btn" onClick={onClick}>{icon}</button>
      <p>{label}</p>
    </div>
    
  )
}

export default memo(RoundtBtn);