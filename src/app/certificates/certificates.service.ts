import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private httpClient: HttpClient) { }

  public getCertificates(): Observable<any> {
    return this.httpClient.get(environment.apiUrl);
  }

  public postCertificate(data): Observable<any> {
    return this.httpClient.post(environment.apiUrl, data);
  }
}
