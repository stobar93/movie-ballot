import React, {createContext, useMemo, useState} from 'react';
import { Dispatch, SetStateAction } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const ThemeContext = 
    createContext<{colorMode: string, setColorMode: Dispatch<SetStateAction<PaletteMode>>}>
        ({colorMode: 'light', setColorMode: ()=>{}})

export const CustomThemeProvider : React.FC = ({children}) => {
    
    const [colorMode, setColorMode] = useState<PaletteMode>('dark');
    const goldenGradient = useMemo(()=>({
        backgroundImage: 'linear-gradient(to right,#462523 0,#cb9b51 15%, #f6e27a 50%,#f6e27a 50%,#cb9b51 85%,#462523 100%)',
        color:'transparent',
        '-webkit-background-clip':'text',
    }), [])

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: colorMode,
                },
            typography: {
                h2: {
                    ...goldenGradient
                },
                h4: {
                    ...goldenGradient
                },
                h6: {
                    ...goldenGradient
                }
            },
            components: {
                MuiCardActions: {
                    styleOverrides: {
                        root: {
                          justifyContent: 'center',
                          height: '35px',
                          maxHeight: '35px'
                        },
                      },
                },
                MuiCard: {
                    styleOverrides: {
                        root: {
                            width: '200px',
                            height: '415px',
                            // transition: 'all 0.2s'
                        }
                    }
                },
                MuiCardMedia: {
                    styleOverrides: {
                        root: {
                            height: '300px',
                            width: '100%',
                            objectFit: 'cover',
                            '&:hover': {
                                cursor: 'pointer',
                                
                            }
                        }
                    }
                }
            },
        }),
        [colorMode, goldenGradient]
    )

  return (
      <ThemeContext.Provider value={{colorMode, setColorMode}}>
        <ThemeProvider theme={theme} >
        {children}
        </ThemeProvider>
    </ThemeContext.Provider>
  );
}