import axiosClient from "./axiosClient";

export const category = { 
    movie: 'movie',
    tv: 'tv'
}

export const movieType =  {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}

export const tvType =  {
    upcoming: 'upcoming',
    popular: 'popular',
    on_the_air: 'on_the_air',
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;


/* 
The code imports an axiosClient module, which is an HTTP client library used for making requests to the TMDB API.

The code defines a category constant object that contains two properties, movie and tv, which are used later in constructing URLs for different API endpoints.

The code defines two constant objects, movieType and tvType, which contain the different types of movies and TV shows that can be fetched from the TMDB API.

The code exports a tmdbApi object that contains several functions. These functions correspond to different endpoints of the TMDB API and take different parameters to construct the corresponding URL for making an API request.

a. The getMoviesList function takes a type parameter that corresponds to the different types of movies defined in movieType. It constructs the URL for the movie endpoint and makes a GET request to fetch the corresponding movie data.

b. The getTvList function is similar to getMoviesList, but it fetches TV show data instead.

c. The getVideos function takes a cate and an id parameter to construct the URL for the videos endpoint and fetches video data related to a specific movie or TV show.

d. The search function takes a cate parameter to indicate whether to search for movies or TV shows and a params object containing query parameters to construct the corresponding URL and fetch search results.

e. The detail function takes a cate and an id parameter to construct the URL for the detail endpoint and fetches detailed information about a specific movie or TV show.

f. The credits function takes a cate and an id parameter to construct the URL for the credits endpoint and fetches information about the cast and crew of a specific movie or TV show.

g. The similar function takes a cate and an id parameter to construct the URL for the similar endpoint and fetches data about movies or TV shows that are similar to a specific movie or TV show.

Finally, the code exports the tmdbApi object as the default export, which can be imported by other modules to interact with the TMDB API using these defined functions
*/