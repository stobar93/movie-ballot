import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import {Movie} from '../../State/types';

interface ImgProps {
  photoUrL: Movie['photoUrL'],
  id: Movie['id'],
}

const CardImg : React.FC<ImgProps> = ({photoUrL, id} : ImgProps) => {
  return (
    <CardMedia
        component="img"
        alt={`${id}-image`}
        image={photoUrL}
      />
  )
}

export default CardImg