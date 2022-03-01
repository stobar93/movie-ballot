import { useContext} from "react";
import {StateContext} from '../Providers/StateProvider';
import { Movie, Vote } from "../State/types";

export const useSelectCategories = (): string[] => {

    const {state} = useContext(StateContext)
    const categories = Array.from(new Set(state.movies.map((movie : Movie) => movie.category)))

    return  categories;
}

export const useSelectMoviesByCategory = (category: string) : Movie[] => {

    const {state} = useContext(StateContext)
    const movies = state.movies.filter(movie => movie.category === category)

    return  movies;
}

export const useSelectVotes = () : Vote[] => {

    const {state} = useContext(StateContext)
    const votes = state.votes

    return  votes;
}