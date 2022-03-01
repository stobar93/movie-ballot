import React, { createContext, useState } from "react";

export const ModalContext = 
    createContext<{
        isModalVisible: boolean,
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    }>(
        {
            isModalVisible: false,
            setModalVisible: () => {},
        }
        );

const ModalProvider: React.FC = ({children}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <ModalContext.Provider value={{isModalVisible, setModalVisible}}>
            {children}
        </ModalContext.Provider> 
    )
}

export default ModalProvider;