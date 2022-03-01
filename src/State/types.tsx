export interface Movie {
    title: string,
    photoUrL: string,
    id: string,
    category: string,
}

export type Action = {
    type: string,
    payload?: any,
}

export type Vote = {
    category: string,
    id?: string
}

export interface State {
    movies: Movie[],
    votes: Vote[],
}

