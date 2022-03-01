import React, {useState} from 'react';
import { Movie } from '../../State/types';
import SectionHeader from './Header';
import CategoryDetails from './Details';
import Accordion from '@mui/material/Accordion';


interface Props {
  category: Movie['category'],
}

const Category : React.FC<Props> = ({category} : Props) => {
  
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(prev=>!prev)}>
      <SectionHeader title={category} />
      
      <CategoryDetails category={category} />
      
      
    </Accordion>    
  )
}

export default Category