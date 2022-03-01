import React from 'react';
import Category from '../Components/Category/Category';
import {useSelectCategories} from '../Hooks/selectors';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  padding: '0px',
  overflowY: 'scroll', 
  height: '95%',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',
})

const Ballot : React.FC = () => {
  const categories = useSelectCategories();
  

  return (
    <StyledContainer >
      {categories && 
        categories.map(category => 
          <Category key={`${category}-section`} category={category} />
      )}
      
    </StyledContainer>
  )
}

export default  Ballot;