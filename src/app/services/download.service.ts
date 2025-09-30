import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})

export class DownloadService {
  apiUrl = environment.apiURL + `/v1`;

  constructor(
    private http: HttpClient
  ) { }

  logDownload() {
    return this.http.post(`${this.apiUrl}/download`, {});
  }
}
