import React, {useContext, useEffect} from 'react';
import {StateContext} from '../../Providers/StateProvider';
import ToggleButton from '@mui/material/ToggleButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Movie, Vote } from '../../State/types';
import { addVote, removeVote } from '../../State/actions';

interface Props {
  movie: Movie,
  selected: boolean,
  setSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectMovieButton : React.FC<Props> = ({movie, selected, setSelected} : Props) => {

  const {state, dispatch} = useContext(StateContext)
  useEffect(() => {
    const isVotedMovie = state.votes.findIndex((vote: Vote) => vote.id === movie.id && 
      vote.category === movie.category) !== -1;
      
    if(!isVotedMovie && selected){
      setSelected(false)
    }

  })
  const handleOnClick = (movie: Movie) : void => {
    let vote : Vote = {id: movie.id, category: movie.category};

    if(selected) {
      setSelected(false);
      dispatch(removeVote(vote));
    } else {
      setSelected(true);
      dispatch(addVote(vote));
    }    
  }

  return (
        <ToggleButton 
        value={movie.id} 
        selected={selected} 
        size="small"
        color='error' 
        onClick={() => handleOnClick(movie)}>
          {selected ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </ToggleButton>
  )
}

export default SelectMovieButton;