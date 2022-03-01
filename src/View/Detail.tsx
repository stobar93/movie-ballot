import React from 'react'
import Grid from '@mui/material/Grid';

const Detail : React.FC = ({children}) => {
  return (
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Grid>
  )
}

export default  Detail;