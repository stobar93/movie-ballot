import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Title from '../Title';

interface Props {
  title: string,
  subheader: string
}

const CustomCardHeader : React.FC<Props> = ({title, subheader}) => {
  return (
    <CardHeader
        title={<Title text={title} />}
        subheader={<Title text={subheader} 
                    variant='subtitle2' 
                    customStyles={{margin: '0px auto', 
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'}} 
                /> ?? ''}
        sx={{maxHeight: '30px'}}
      />
  )
}

export default CustomCardHeader