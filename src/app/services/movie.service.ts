import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';     // the return object - it's basically just something like a stream of data

// now import the environment variables I added earlier for the api key
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root',
})
export class MovieService {

  // Store the last viewed movie ID
  currentMovieId = 0;

  // create the constructor first so it injects the HttpClient to talk to the api
  constructor (private http: HttpClient) {}


  // method to make the calls to the api that the Home Page can call to populate it
  // return type will be something like a stream for the JSON info the api sends back to us - the stream is the <any> here

  getTrendingMovieList(): Observable<any> {

    // error located here, I was using normal quotes and not the backticks for the required syntax
    // var url = '${environment.tmdbBaseUrl}/trending/movie/day?api_key=${environment.tmdbApiKey}';
    var url = `${environment.movieDatabaseUrl}/trending/movie/day?api_key=${environment.movieDatabaseApiKey}`;



    // now return what it receives with this api call that uses the key from the env variable
    return this.http.get(url);
  }


  // services to call to get the movie details and the movie cast and cerw


  /*

  The URLS for these calls need to look like this according to the lit 
  https://api.themoviedb.org/3/movie/12345?api_key=xxx
  https://api.themoviedb.org/3/movie/12345/credits?api_key=xxx

  */


  // Gets the full details of a single movie by its ID - again returns a stream
  // makes a call again with the movie api key
  getIndividualMovieDetails(id: number): Observable<any> {
    const url = `${environment.movieDatabaseUrl}/movie/${id}?api_key=${environment.movieDatabaseApiKey}`;
    return this.http.get(url);
  }

  // Gets the cast and crew of a single movie by its ID
  // makes a call to the credits (ei.e. the cast and crew) this time
  getMovieCredits(id: number): Observable<any> {
    const url = `${environment.movieDatabaseUrl}/movie/${id}/credits?api_key=${environment.movieDatabaseApiKey}`;
    return this.http.get(url);
}
    
}
