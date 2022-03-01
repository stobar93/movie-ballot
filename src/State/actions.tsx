import { Action, Movie, Vote } from "./types";
import {SET_MOVIES,SET_VOTES, ADD_VOTE, REMOVE_VOTE, CLEAR_VOTES} from './actionTypes';

export const setMovies = (payload: Movie[]) : Action => ({type: SET_MOVIES, payload});
export const setVotes = (payload: Movie[]) : Action => ({type: SET_VOTES, payload});
export const addVote = (payload: Vote) : Action => ({type: ADD_VOTE, payload});
export const removeVote = (payload: Vote) : Action => ({type: REMOVE_VOTE, payload});
export const clearVotes = () : Action => ({type: CLEAR_VOTES});