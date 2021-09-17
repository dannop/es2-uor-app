import { Container, Modal } from 'react-bootstrap';

import { memo } from 'react';

function DefaultModal({ visible, setVisible, title, content }: any){
  const close_btn = (
    <div className="closeAlertModalContainer">
      <button className="closeModalBtn" onClick = {() => setVisible(false)}> 
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.617028" y1="14.6464" x2="14.617" y2="0.646447" stroke="black"/>
          <line x1="14.617" y1="15.3536" x2="0.617028" y2="1.35355" stroke="black"/>
        </svg>
      </button>
    </div>
  );

  return (
    <Modal onHide={()=> setVisible(false)} show={visible} centered id="alertModal">
      <Container>
        {close_btn}
        <Container>
          <h1>{title}</h1>
          <p>{content}</p>
        </Container>
      </Container>
    </Modal>
  )
}

export default memo(DefaultModal);