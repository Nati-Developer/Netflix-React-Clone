const API_KEY = "8b73cdacc84d68ff6f7f455fe7df28e8";



const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchEthiopianMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=am&region=ET`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default requests;

// https://api.themoviedb.org/3/movie/5507?api_key=8ee60c02d3f372d8f776a5f137f5634b