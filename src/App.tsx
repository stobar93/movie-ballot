import React from 'react';
import { useRoutes } from 'react-router-dom';
import useMovies from './Hooks/useMovies';
import { useModal } from './Hooks/useModal';
import {ROUTES} from './Routes/routes';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Title from './Components/Title';
import Toolbar from './Components/ToolBar';
import Search from './Components/Search';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Votes from './View/Votes';
import Switch from './Components/Switch';

const App : React.FC = () => {

  const routes = useRoutes(ROUTES);
  const {isModalVisible, setModalVisible} = useModal();

  useMovies();
  
  return (
      <Paper elevation={0}>
        <Title variant='h2' text="Movie Awards" customStyles={{fontFamily: 'Cinzel Decorative', margin: 'auto', padding: '15px 0'}}/>
        <Toolbar>
            <Search />
            
          </Toolbar>
        <Container sx={{height: '100vh'}}>
          {routes}
        </Container>
        <Toolbar>
            <Button handleOnClick={() => setModalVisible(true)}>SUBMIT</Button>
            <Switch />
            <Modal isVisible={isModalVisible} setIsVisible={setModalVisible} >
              <Votes />
            </Modal>
          </Toolbar>
      </Paper>
  );
}

export default App;
