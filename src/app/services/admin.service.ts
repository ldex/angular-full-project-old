import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://your_rest_api.net/api/profile';
  private storageKey: string = 'auth_token';

  getProfile(): Observable<string> {

    if (environment.demo) {

      // Demo mode
      return of('Secured info!');

    } else {

      // Real server call here!
      // Authorization token will be automatically sent to the server in the Http Headers with an interceptor
      // (auth-interceptor or automatically via the angular-jwt library)
      return this
        .http
        .get<string>(this.baseUrl);

      // The following is only if you want to manually send the token (without interceptor)
      // const authToken = localStorage.getItem(this.storageKey);
      // const headers = { 'Authorization': `Bearer ${authToken}` };
      // return this
      //   .http
      //   .get<string>(this.baseUrl, { headers });
    }
  }

}
