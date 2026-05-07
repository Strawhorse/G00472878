import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';     // the return object - it's basically just something like a stream of data

// now import the environment variables I added earlier for the api key
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root',
})
export class MovieService {


  // create the constructor first so it injects the HttpClient to talk to the api
  constructor (private http: HttpClient) {}


  // now create the method to make the calls to the api that the Home Page can call to populate it
  // return type will be something like a stream for the JSON info the api sends back to us

  getTrendingMovieList(): Observable<any> {
    var url = '${environment.tmdbBaseUrl}/trending/movie/day?api_key=${environment.tmdbApiKey}';

    // now return what it receives with this api call that uses the key from the env variable
    return this.http.get(url);
  }

  
}
