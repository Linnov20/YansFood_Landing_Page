import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environment/environment';

@Injectable({ providedIn: 'root' })

export class NewsletterService {
  apiUrl = environment.apiURL + `/v1`;

  constructor(private http: HttpClient) {}

  subscribe(email: string) {
    return this.http.post(`${this.apiUrl}/newsletter`, { email });
  }
}
