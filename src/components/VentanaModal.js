import { Modal, ModalBackground, ModalContent, ModalClose, Title } from 'bloomer';
//instalar las librerías Bloomer y Bulma: npm install bloomer --save y npm install bulma

export const VentanaModal = ({title, handleClose}) => {
  
  return (
    <>
    <div className="overlay">
    <Modal>
      <ModalBackground />
      <ModalContent >
        <Title>{title}</Title>
      </ModalContent>
      <ModalClose className="btn-overlay" onClick={handleClose}>Cerrar</ModalClose>
    </Modal>
    </div>
    </>
  )
}


