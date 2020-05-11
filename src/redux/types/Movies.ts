export interface MoviesState {
    moviesFetchLoading: boolean;
    moviesFetchError: boolean;
    movies: Movie[];
    searchQuery: string,
    pages: number,
    currentPage: number,
}

export interface Movie {
    popularity: number,
    id: number,
    video: boolean,
    vote_count: number,
    vote_average: number,
    title: string,
    release_date: string,
    original_language: string,
    original_title: string,
    genre_ids: Array<number>,
    backdrop_path: string,
    adult: boolean,
    overview: string,
    poster_path: string
}
