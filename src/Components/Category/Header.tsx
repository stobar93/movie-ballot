import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import Title from '../Title';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  title: string
}



const SectionHeader : React.FC<Props> = ({title}: Props) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Title variant='h4' align='justify' text={title} customStyles={{fontFamily: 'Cinzel Decorative', margin:'0', padding: '0px 0', fontWeight: '700'}}/>
    </AccordionSummary>
  )
}

export default SectionHeader