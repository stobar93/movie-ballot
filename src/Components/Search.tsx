import React, { useState, useContext, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import { Movie } from '../State/types';
import Card from './Card/Card';
import {StateContext} from '../Providers/StateProvider';
import CustomCarousel from './Category/Carousel';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  '&:hover': {
    backgroundColor: '#999999',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = () => {
  const {state} = useContext(StateContext)
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [openResults, setOpenResults] = useState(false);

  useEffect(() => {
    if(search !== ''){
      const movies = state.movies.filter(movie => (
        movie.title.match(new RegExp(search, 'i')) || 
        movie.category.match(new RegExp(search, 'i')) ||
        movie.id.match(new RegExp(search, 'i'))
        ))
    setResults(movies);
    } else {
      setResults([]);
    }
    
  }, [search, state.movies])

  useEffect(() => {
    results.length > 0 ? 
    setOpenResults(true)
    : setOpenResults(false)
  }, [results])

  const handleChange = (e: any) => {
    let value = e.target.value;
      setSearch(value)   
  }

  const handleClose = () => {
    setResults([])
    setOpenResults(false)
    setSearch('')
  };
  
  return (
      <>
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', maxWidth: '80%', margin:'0px auto'}} >
          <Search>
          {openResults ? <CloseIcon onClick={handleClose} /> 
          : <SearchIconWrapper >
          <SearchIcon />
        </SearchIconWrapper>
          }
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(e) => handleChange(e)}
            />
            
          </Search>
          
        {/* <List sx={{display: , position: 'relative'}}> */}
          <Box sx={{display: openResults ? 'flex' : 'none', flexDirection:'row', flexWrap: 'wrap'}} >
          <CustomCarousel setItemsPosition={setResults}>
          {
            results.map(movie => <Card movie={movie} />)
          }
          </CustomCarousel>
          
          </Box>
          </Box>
        {/* </List> */}
          
          
      
      </>
  );
}

export default SearchBar;
