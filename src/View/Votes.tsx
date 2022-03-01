import React, {useContext} from 'react';
import Title from '../Components/Title';
import { useSelectVotes } from '../Hooks/selectors';
import {useModal} from '../Hooks/useModal';
import  Grid  from '@mui/material/Grid';
import Button from '../Components/Button';
import {StateContext} from '../Providers/StateProvider';
import { clearVotes } from '../State/actions';

const Votes : React.FC = () => {

    const userVotes = useSelectVotes();
    const {dispatch} = useContext(StateContext);
    const {setModalVisible} = useModal()

    const handleSubmit = () => {
            let isAnyVoteMissing = userVotes.some(vote => vote.id === undefined)
            if(isAnyVoteMissing){
              alert('Please select one movie for each category before submit')
              setModalVisible(false)
              return
            }
            setModalVisible(false)
            dispatch(clearVotes())
    }

  return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        <Title variant='h4' text="Your Votes" customStyles={{fontFamily: 'Cinzel Decorative', margin: 'auto', padding: '15px 0'}}/>
          {
              userVotes.map((vote) => (
                <Grid container direction="column" justifyContent="space-between" alignItems="left">
                <Title variant='subtitle2' text={vote.category} align='left' customStyles={{fontFamily: 'Cinzel Decorative', padding: '0px'}}/>
                <Title variant='h6' text={vote.id?.replace('-', ' ')} align='right' customStyles={{fontFamily: 'Cinzel Decorative', padding: '0px'}}/>
                </Grid>
                ))
          }
          <Button handleOnClick={handleSubmit}>
            SUBMIT?
          </Button>
      </Grid>
  )
}

export default Votes;