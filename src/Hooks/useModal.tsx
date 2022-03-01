import { useContext} from "react";
import {ModalContext} from '../Providers/ModalProvider';

export const useModal = (): {isModalVisible: boolean, setModalVisible: React.Dispatch<React.SetStateAction<boolean>>} => {

    const {isModalVisible, setModalVisible} = useContext(ModalContext)

    return {isModalVisible, setModalVisible};
}
