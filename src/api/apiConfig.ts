const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    // apiKey: import.meta.env.VITE_TMDB_API_KEY,
    apiKey: "f1caab63143e7015555fbf075d05adae",
    originalImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;