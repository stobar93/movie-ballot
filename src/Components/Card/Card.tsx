import React, {useState} from 'react';
import { Movie } from '../../State/types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardImg from './CardImg';
import CardHeader from './CardHeader';
import SelectMovieButton from './SelectMovieButton';
import {styled} from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
interface Props {
  movie: Movie
}

const StyledCard = styled(Card)({
  maxWidth: '345px', 
  minWidth: '200px',
})

const StyledCardImg = styled(CardImg)({
    '&:hover': {
      cursor: 'pointer'
    }
})

const CustomCard : React.FC<Props> = ({movie} : Props) => {
  const [selected, setSelected] = useState(false);

  const handleOnClick = (movie: Movie) : void => {
       
  }

  return (
    <StyledCard elevation={10} >
      <CardHeader
        title={movie.title.split('for')[0]}
        subheader={movie.title.split('for')[1] ?? ''}
      />
      <CardActionArea onClick={() => handleOnClick(movie)}>
        <StyledCardImg id={movie.id} photoUrL={movie.photoUrL} />
      </CardActionArea>
      
      <CardActions>
        <SelectMovieButton movie={movie} selected={selected} setSelected={setSelected} />
      </CardActions>
    </StyledCard>
  )
}

export default CustomCard