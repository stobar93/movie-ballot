import React from 'react'
import ModalProvider from './ModalProvider';
import QueryProvider from './QueryProvider';
import StateProvider from './StateProvider';
import {CustomThemeProvider} from './ThemeProvider';

interface Props {
    children: React.ReactNode;
}

const Providers: React.FC<Props> = ({children} : Props) => {
  return (
      <QueryProvider>
        <StateProvider>
          <CustomThemeProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </CustomThemeProvider>
        </StateProvider>
      </QueryProvider>
  )
}

export default Providers