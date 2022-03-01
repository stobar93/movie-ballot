import React, {useState} from 'react';
import { useSelectMoviesByCategory } from '../../Hooks/selectors';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '../Card/Card';
import { Movie } from '../../State/types';
import Carousel from './Carousel';

interface Props {
    category: Movie['category']
}

const CategoryDetails : React.FC<Props> = ({category}: Props) => {
    const moviesByCategory = useSelectMoviesByCategory(category);
    const [movies, setMovies] = useState(moviesByCategory)
  return (
    <>
      <AccordionDetails sx={{display: 'flex', flexDirection: 'row', overflowX: 'hidden'}}>
      <Carousel setItemsPosition={setMovies}>
        {
        movies.map(movie => <Card key={`${movie.id}-card`} movie={movie} />)
        }
        </Carousel>
      </AccordionDetails>
    </>
    
  )
}

export default CategoryDetails;