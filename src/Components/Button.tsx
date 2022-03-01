import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  children: React.ReactNode,
  handleOnClick: () => void
}

const CustomButton : React.FC<Props> = ({children, handleOnClick}) => {
  return (
    <Button variant="contained" onClick={handleOnClick}>{children}</Button>
  )
}

export default CustomButton