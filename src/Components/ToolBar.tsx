import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Footer : React.FC = ({children}) => {
  return (
    <AppBar sx={{backgroundColor:'background.paper', position:'sticky', bottom:'0px', display: 'flex', flexDirection:'row', justifyContent:'center', height: 'auto', padding: '0px', width:'100%'}}>
      <Toolbar sx={{width: '100vw', p: '10px', justifyContent:'center'}}>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default Footer