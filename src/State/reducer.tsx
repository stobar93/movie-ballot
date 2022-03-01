import {State, Action, Movie, Vote} from './types';
import {SET_MOVIES, ADD_VOTE, REMOVE_VOTE, SET_VOTES, CLEAR_VOTES} from './actionTypes';

export const initialState : State = {
    movies: [],
    votes: []
}

const setVotes = (state: State, movies: Movie[]) => {
    let votes : Vote[] = state.votes.length === 0 ? Array.from(
        new Set(movies.map(movie => movie.category))
        ).map(category => ({category})) : state.votes
    return {
        ...state,
        votes
    }
}

const addNewVote = (state: State, addedVote: Vote) => {
    let newVotes = state.votes.map(vote => {
        if(vote.category === addedVote.category){
            return {...vote, id: addedVote.id}
        }
        return vote;
    })
    return {
        ...state,
        votes: newVotes
    }
}

const removePreviousVote = (state: State, removedVote: Vote) => {
    let newVotes = state.votes.map(vote => {
        if(vote.category === removedVote.category){
            return {category: vote.category}
        }
        return vote;
    })
    return {
        ...state,
        votes: newVotes
    }
}

const clearSubmittedVotes = (state: State) => {
    let submittedVotes = state.votes;
    let clearedVotes = submittedVotes.map(vote => ({category: vote.category}));
    return {...state, votes: clearedVotes};
}

export const reducer = (state: State, action: Action) => {
    switch(action.type){
        case SET_MOVIES:
            return {...state, movies: action.payload}
        case SET_VOTES:
            return setVotes(state, action.payload)
        case ADD_VOTE: 
            return addNewVote(state, action.payload)
        case REMOVE_VOTE:
            return removePreviousVote(state, action.payload)  
        case CLEAR_VOTES:
            return clearSubmittedVotes(state)  
        default:
            return state
    }   
}

