const apiConfig = { 
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b39a02f9d49ce797ce8f43804d3a68e1   ',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig; 