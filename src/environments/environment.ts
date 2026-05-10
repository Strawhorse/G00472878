


// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movieDatabaseApiKey: 'dcaa68b8ed74bede1d4dcf7a2e00fc53',
  // tmdbAccessToken: 'your-new-access-token-here', Not needed here, although this apparently is a newer method
  movieDatabaseUrl: 'https://api.themoviedb.org/3'
};

// It's generally not good to expose any api keys to the public or where someone could decrypt it from an app, but since I'm just building a college app
// it's fine. In reality, it's better to use a backend somewhere to make the api calls and then serve them to the mobile app instead