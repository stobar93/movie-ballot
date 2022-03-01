import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Movie } from '../../State/types';

interface Props {
    children: React.ReactNode,
    setItemsPosition: React.Dispatch<React.SetStateAction<Movie[]>>
}

const icons = {
    next: <ArrowForwardIosIcon fontSize='large'/>,
    previous: <ArrowBackIosNewIcon fontSize='large' />
}

const StyledButton = styled(Button)({
    position: 'absolute',
    color:'white',
    zIndex:1,
    top: 0,
    height:'100%',
    width: '40px',
    opacity: 0.6,
    transition: 'all 0.2s',
    '&:hover': {
        opacity: 0.4,
        backgroundColor: '#000',
        boxShadow: 'none',
    },
})

const CustomCarousel : React.FC<Props> = ({children, setItemsPosition}) => {

    const handlePositionChange = (e: any) => {
        if(e.target.value === 'right'){
            setItemsPosition(prev => {
                let copy = [...prev];
                let first = copy[0];
                return [...copy.slice(1), first]
            })
        } else{
            setItemsPosition(prev => {
                let copy = [...prev];
                let length = copy.length;
                let last = copy[length-1];
                return [last,...copy.slice(0, length-1)]
            })
        }
    }

        return (
        <Box sx={{overflowX: 'hidden', maxWidth: '100%', height: '415px', position:'relative', p: '20px 0px'}}>
            <StyledButton startIcon={icons.previous} id='carousel-left' value='left' onClick={(e) => handlePositionChange(e)}
                sx={{ left: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(199, 193, 76, 0))', }} />
            <Stack direction="row" spacing={2} sx={{position: 'relative', width: '100vw'}} >
            {children}
            </Stack>
            <StyledButton startIcon={icons.next} id='carousel-right' value='right' onClick={(e) => handlePositionChange(e)}
            sx={{ right: 0, background: 'linear-gradient(to left, rgba(0, 0, 0, 1), rgba(199, 193, 76, 0))', }} />
        </Box>
    )
}

export default CustomCarousel;