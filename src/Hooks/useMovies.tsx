import { useQuery } from "react-query";
import { useContext, useState, useEffect} from "react";
import axios from 'axios';
import {StateContext} from '../Providers/StateProvider';

import { Movie } from "../State/types";
import { setMovies, setVotes } from "../State/actions";

const useMovies = () => {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        setEnabled(false)
    }, [])

    const {dispatch} = useContext(StateContext)
    
    const {data: response, isLoading, isError, isSuccess} = useQuery(
        ['movies'],
        () => axios.get('http://localhost:8080/api/movies'),
        {
            onSuccess: (response) => {
                const movies : Movie[] = response.data.movies
                dispatch(setMovies(movies))
                dispatch(setVotes(movies))
            },
            enabled: enabled
        }
    )

    return {
        movies: response?.data.movies ?? [],
        isLoading,
        isError,
        isSuccess
    };
}

export default useMovies;