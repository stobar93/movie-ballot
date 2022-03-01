import React from 'react';
import Typography from '@mui/material/Typography';
import { TypographyVariant } from '@mui/material';

interface Props {
  text?: string,
  variant?: TypographyVariant,
  align?: "right" | "left" | "inherit" | "center" | "justify" | undefined,
  customStyles?: {
    fontFamily?: string,
    margin?: string,
    padding?: string,
    color?: string,
    textOverflow?: string,
    whiteSpace?: string,
    fontWeight?: string,
  }
}

const Title : React.FC<Props> = ({text, variant, align, customStyles} : Props) => {

  return (
    <Typography align={align ?? 'center'} variant={variant} sx={customStyles} gutterBottom>
    {text}
  </Typography>
  )
}

export default Title