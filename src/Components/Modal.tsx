import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  color: 'text.primary',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  children: React.ReactNode,
  isVisible: boolean,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onClose?: CallableFunction
}

const CustomModal : React.FC<Props> = ({children, isVisible, setIsVisible, onClose}) => {

  const handleOnClose = () => {
    onClose && onClose();
    setIsVisible(false)
  }

  return (
      <Modal
        aria-labelledby="modal-module"
        aria-describedby="modal-module"
        open={isVisible}
        onClose={() => handleOnClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isVisible}>
          <Box sx={style}>
            {children}
          </Box>
        </Fade>
      </Modal>
  );
}
export default CustomModal